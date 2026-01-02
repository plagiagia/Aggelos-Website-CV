import { Work } from './works';

// Server-only functions for loading uploaded works
// These use Node.js fs module and should only be imported in server components

export async function getUploadedWorks(): Promise<Work[]> {
  try {
    const { readFile } = await import('fs/promises');
    const { existsSync } = await import('fs');
    const { join } = await import('path');
    
    const uploadedWorksPath = join(process.cwd(), 'data', 'uploaded-works.json');
    
    if (!existsSync(uploadedWorksPath)) {
      return [];
    }

    const fileContent = await readFile(uploadedWorksPath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error loading uploaded works:', error);
    return [];
  }
}

export async function getAllWorksCombined(staticWorks: Work[]): Promise<Work[]> {
  const uploadedWorks = await getUploadedWorks();
  return [...staticWorks, ...uploadedWorks];
}

export async function getWorkBySlugCombined(slug: string, staticWorks: Work[]): Promise<Work | undefined> {
  const allWorks = await getAllWorksCombined(staticWorks);
  return allWorks.find(work => work.slug === slug);
}
