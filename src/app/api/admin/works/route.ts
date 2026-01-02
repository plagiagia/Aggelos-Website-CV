import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { Work } from '@/data/works';

export async function GET() {
  try {
    const uploadedWorksPath = join(process.cwd(), 'data', 'uploaded-works.json');
    
    if (!existsSync(uploadedWorksPath)) {
      return NextResponse.json({ works: [] }, { status: 200 });
    }

    const fileContent = await readFile(uploadedWorksPath, 'utf-8');
    const works: Work[] = JSON.parse(fileContent);

    return NextResponse.json({ works }, { status: 200 });
  } catch (error) {
    console.error('Error fetching uploaded works:', error);
    return NextResponse.json(
      { error: 'Failed to fetch works' },
      { status: 500 }
    );
  }
}
