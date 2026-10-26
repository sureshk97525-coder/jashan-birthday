# Birthday Website Template 2 — Jashan × Suru

A cinematic, dark, romantic birthday microsite personalized for Jashan by Suru. Built with plain HTML, CSS, and JavaScript—no install or build step required.

## Run locally
1. Extract the ZIP.
2. Open `index.html` in Chrome, Firefox, Edge, or Safari.
3. For a local development server, open the folder in VS Code and use the Live Server extension, or run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Personalize it
- **Names / date:** Search `index.html` for `Jashan`, `Suru`, and `10 NOVEMBER 2006`. Edit the visible copy as desired.
- **Photos:** Replace `assets/memory-01.jpg` through `assets/memory-10.jpg` with your own JPG images, keeping the filenames. `memory-02.jpg` is used as the hero portrait; the gallery uses `memory-03.jpg` through `memory-10.jpg`.
- **Birthday letter:** Edit the copy inside the `#letter` section in `index.html`.
- **Reasons:** Edit the `reasons` array near the top of `script.js`.
- **Colors / typography:** Edit CSS variables at the top of `style.css`.
- **Sound:** Visitors can turn the gentle synthesized tone on or off using the top-right control. It starts off, respecting browser autoplay restrictions.
- **Privacy:** The site is static. Photos are bundled with the website when deployed; only share the deployed link with people you trust. Remove any photo you don't have permission to share.

## Deploy to Vercel
1. Put the project folder in a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Other**. Build command: leave empty. Output directory: `.` (project root).
4. Deploy. Test the resulting URL on mobile and desktop.

You can also deploy the folder using another static hosting service. No environment variables or dependencies are required.

## Project structure
- `index.html` — page content and sections
- `style.css` — responsive design and animations
- `script.js` — interactions, reasons, wish animation, and optional tone
- `assets/` — personal photo gallery
