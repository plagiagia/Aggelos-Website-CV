import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { Work } from '@/data/works';

// Disable body parsing, we'll handle it manually for FormData
export const runtime = 'nodejs';

async function ensureDirectoryExists(dirPath: string) {
  if (!existsSync(dirPath)) {
    await mkdir(dirPath, { recursive: true });
  }
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function generateId(): string {
  return `work-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export async function POST(request: NextRequest) {
  // Basic authentication check
  const authHeader = request.headers.get('authorization');
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  
  if (!authHeader || authHeader.replace('Bearer ', '') !== adminPassword) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const formData = await request.formData();
    const workDataStr = formData.get('work') as string;
    
    if (!workDataStr) {
      return NextResponse.json(
        { error: 'Work data is required' },
        { status: 400 }
      );
    }

    const workData = JSON.parse(workDataStr);
    const thumbnail = formData.get('thumbnail') as File;
    const images = formData.getAll('images') as File[];

    if (!thumbnail) {
      return NextResponse.json(
        { error: 'Thumbnail image is required' },
        { status: 400 }
      );
    }

    // Generate slug and ID
    const slug = generateSlug(workData.title.en || workData.title.de || 'untitled');
    const id = generateId();

    // Ensure upload directories exist
    const uploadsDir = join(process.cwd(), 'public', 'uploads', 'works');
    const workDir = join(uploadsDir, id);
    await ensureDirectoryExists(workDir);

    // Save thumbnail
    const thumbnailBytes = await thumbnail.arrayBuffer();
    const thumbnailBuffer = Buffer.from(thumbnailBytes);
    const thumbnailExt = thumbnail.name.split('.').pop() || 'jpg';
    const thumbnailFilename = `thumbnail.${thumbnailExt}`;
    const thumbnailPath = join(workDir, thumbnailFilename);
    await writeFile(thumbnailPath, thumbnailBuffer);
    const thumbnailUrl = `/uploads/works/${id}/${thumbnailFilename}`;

    // Save additional images
    const imageUrls: Array<{ src: string; alt: { en: string; de: string } }> = [];
    
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const imageBytes = await image.arrayBuffer();
      const imageBuffer = Buffer.from(imageBytes);
      const imageExt = image.name.split('.').pop() || 'jpg';
      const imageFilename = `image-${i + 1}.${imageExt}`;
      const imagePath = join(workDir, imageFilename);
      await writeFile(imagePath, imageBuffer);
      
      imageUrls.push({
        src: `/uploads/works/${id}/${imageFilename}`,
        alt: {
          en: workData.images?.[i]?.alt?.en || `${workData.title.en} - Image ${i + 1}`,
          de: workData.images?.[i]?.alt?.de || `${workData.title.de || workData.title.en} - Bild ${i + 1}`,
        },
      });
    }

    // If no additional images, use thumbnail as the main image
    if (imageUrls.length === 0) {
      imageUrls.push({
        src: thumbnailUrl,
        alt: {
          en: workData.title.en || 'Artwork',
          de: workData.title.de || workData.title.en || 'Kunstwerk',
        },
      });
    }

    // Create work object
    const newWork: Work = {
      id,
      slug,
      title: workData.title,
      year: workData.year,
      medium: workData.medium,
      dimensions: workData.dimensions,
      thumbnail: thumbnailUrl,
      images: imageUrls,
      shortDescription: workData.shortDescription,
      longDescription: workData.longDescription,
      metadata: workData.metadata || [],
    };

    // Load existing uploaded works
    const uploadedWorksPath = join(process.cwd(), 'data', 'uploaded-works.json');
    let uploadedWorks: Work[] = [];
    
    if (existsSync(uploadedWorksPath)) {
      const { readFile } = await import('fs/promises');
      const existingData = await readFile(uploadedWorksPath, 'utf-8');
      uploadedWorks = JSON.parse(existingData);
    }

    // Add new work
    uploadedWorks.push(newWork);

    // Save updated works
    await ensureDirectoryExists(join(process.cwd(), 'data'));
    await writeFile(uploadedWorksPath, JSON.stringify(uploadedWorks, null, 2), 'utf-8');

    return NextResponse.json(
      { success: true, work: newWork },
      { status: 200 }
    );
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload work. Please try again.' },
      { status: 500 }
    );
  }
}
