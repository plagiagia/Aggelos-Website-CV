# Admin Upload Feature

This feature allows the artist to upload their own works directly through the website.

## Setup

1. **Set Admin Password**

   Create a `.env.local` file in the root directory (if it doesn't exist) and add:

   ```
   ADMIN_PASSWORD=your-secure-password-here
   ```

   **Important**: Choose a strong password. If not set, the default password is `admin123` (change this in production!).

2. **Directory Structure**

   The following directories will be created automatically when you upload your first work:
   - `public/uploads/works/` - Stores uploaded images
   - `data/` - Stores work metadata JSON file

## Usage

1. Navigate to `/admin/upload` in your browser
2. Enter your admin password
3. Fill out the form with work details:
   - **Title**: Required in English, optional in German and Greek
   - **Year**: Year the work was created
   - **Medium**: Art medium (e.g., "Oil on canvas")
   - **Dimensions**: Size of the work (e.g., "50 × 70 cm")
   - **Short Description**: Brief description (required in English)
   - **Long Description**: Detailed description (optional)
   - **Thumbnail Image**: Main image for the work (required)
   - **Additional Images**: Optional additional images
   - **Metadata**: Optional key-value pairs (e.g., series, exhibition, availability)

4. Click "Upload Work"
5. The work will appear on the `/works` page immediately

## File Storage

- **Images**: Stored in `public/uploads/works/{work-id}/`
- **Metadata**: Stored in `data/uploaded-works.json`

## Security Notes

- The admin password should be kept secure
- In production, consider implementing:
  - Proper session management (e.g., NextAuth.js)
  - Rate limiting on upload endpoints
  - File size limits
  - Image validation and optimization
  - CSRF protection

## Technical Details

- Uploaded works are stored separately from static works
- The system combines both static and uploaded works when displaying
- Each uploaded work gets a unique ID and slug (generated from title)
- Images are stored with their original filenames in organized directories
