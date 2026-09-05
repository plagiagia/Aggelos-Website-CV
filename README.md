# Aggelos Giannoulis — artist website

A quiet portfolio built around the artist’s original drawings. Plain HTML, CSS and JavaScript, with Node.js Vercel Functions and Supabase persistence. No frontend framework or runtime npm dependencies.

## Local preview

Requires Node.js 22 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000. On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`.

Without credentials, the original ten works are available and direct email works. Studio login and form delivery explicitly report that setup is incomplete. No fake success or browser-only storage is used.

## Activate on Vercel

1. Create a Supabase project, preferably in a region appropriate for the artist and audience.
2. In its SQL editor, run `supabase/schema.sql`, then `supabase/seed.sql`. This creates private artwork metadata, a private enquiry inbox, persistent rate limits, and a public image bucket. The seed preserves existing records when rerun.
3. Import this repository into Vercel. Framework preset: **Other**. `vercel.json` sets `npm run build` and output directory `dist`. Root `api/*.js` files are Vercel Functions.
4. Add these server-only Vercel environment variables:

| Variable | Value |
| --- | --- |
| `SUPABASE_URL` | Project URL, e.g. `https://your-project.supabase.co`, without trailing slash |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key; never expose it in client code |
| `ADMIN_PASSWORD` | A unique studio password of at least 16 characters |
| `SESSION_SECRET` | Independent random secret of at least 32 characters |

5. Deploy/redeploy, visit `/studio/`, sign in, and verify a draft upload and a contact enquiry. Enquiries arrive in the studio inbox; this version does **not** send email notifications. Check the inbox regularly.
6. Set the custom domain in Vercel. Replace the relative `og:image` in `index.html` with the final absolute image URL, and add canonical/`og:url` metadata once that domain is known.

For local connected use, copy `.env.example` to `.env.local` and fill the same values. Never commit secrets. A separate Supabase project for previews avoids mixing test enquiries with real ones. Use an HTTPS production domain so the studio cookie is secure.

Supabase was selected to keep database, abuse counters and artwork files in one service. Uploads are capped at 3 MB to stay under Vercel’s 4.5 MB function payload limit after base64 encoding. See [Vercel limits](https://vercel.com/docs/functions/limitations) and [Supabase storage access control](https://supabase.com/docs/guides/storage/security/access-control).

## Artist’s day-to-day guide

- Open `/studio/` and sign in. Sessions expire after eight hours.
- Choose **Add an artwork**, upload a JPEG/PNG/WebP under 3 MB, fill in the title, year, medium and image description. Dimensions and notes are optional.
- Lower **Display order** numbers appear first. Uncheck **Published** to keep a draft. Click **Save artwork** to persist changes.
- Choose **Edit** to revise a work or replace its image. Uploading alone does not save the artwork record.
- **Delete** permanently removes an artwork record after confirmation. Uploaded files remain in Supabase Storage to avoid accidentally breaking references; remove unused files there when appropriate. Draft images are publicly accessible to anyone with the image URL, even though their records are private.
- Read **Enquiries**, choose **Reply by email** to use your email app, and delete messages when no longer needed. The inbox shows the latest 200; older messages remain in the database until removed.
- Changing `SESSION_SECRET` invalidates all active sessions. Change both password and session secret if access is compromised.

## Content and design review

Reviewed the supplied `assets/Aggelos_Giannoulis_CV_Updated.docx` and all 31 pages of `assets/Master_Thesis_Portfolio.pdf` through text extraction; inspected artwork imagery and extracted the original embedded artwork images for the ten selected works. No separate report was present in the repository.

Changes:

- Replaced the animated marketing layout, monogram, statistics, theme switch and scrolling text with a paper-toned exhibition layout, restrained serif typography, and full uncropped images.
- Extracted the artworks from the PDF instead of showing screenshots of entire pages with baked-in captions. Original documents and old images remain intact.
- Corrected the title drawing from 2025 to **2023**, as stated on portfolio page 30. **June 2025** is the exhibition date.
- Omitted dimensions because the portfolio uses `00×00` placeholders.
- Replaced the invented blockquote with a short third-person summary of the supplied Greek statement. No invented artist quotations or exhibition credits.
- Retained email `aggelos.giannoul@gmail.com` and Instagram `@aggelos_gia` from the existing page. The supplied CV has placeholder contact fields, so ownership/deliverability still needs checking by the artist.
- The PDF’s embedded image for Black Hole in the Kitchen is only 207 × 211 pixels. Other images are also modest resolution. Replace these through the studio with better original photographs when available; do not upscale and invent detail.

## Verification and maintenance

```sh
npm test
npm run build
```

API tests cover authentication, tampered sessions, cross-origin writes, contact validation, unsupported images, and upload/publish/enquiry/inbox flows against a mocked storage service. They do not establish that a real Supabase project has been provisioned. Complete the live acceptance steps after connecting credentials.

The build copies only public assets into `dist/`; server helpers, SQL, tests and secrets are excluded. Database tables have RLS enabled and no anonymous read/write policies. The service key stays in Vercel Functions. Login and contact limits are persisted in the database. Content is rendered with DOM text nodes, and production responses include a Content Security Policy.

Back up the Supabase database and Storage bucket. Delete enquiries that are no longer needed. Confirm the privacy text matches actual operating practices before launch. Static biography and document changes can be made in `index.html` and `assets/`; the studio manages artworks and enquiries.
