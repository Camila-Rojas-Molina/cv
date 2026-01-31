# Camila Rojas Molina Portfolio

Multi-page portfolio website for Camila Rojas Molina, Computer Science student at Concordia University, Montréal.

## Live Site

**URL:** https://camila-rojas-molina.github.io/cv/

## Project Structure

```
cv/
├── docs/                   # Published folder (GitHub Pages source)
│   ├── index.html         # Homepage
│   ├── about.html         # About page
│   ├── projects.html      # Projects showcase
│   ├── cv.html            # CV/Resume
│   ├── contact.html       # Contact form
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/            # Profile and project images
│   └── downloads/         # PDF CV
├── src/                   # Original Three.js version (archived)
└── README.md
```

## Local Development

No build tools required. Open any HTML file in your browser:

```bash
open docs/index.html
```

Or use a simple local server:

```bash
cd docs
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Deployment (GitHub Pages)

1. Commit changes to the `docs/` folder
2. Push to GitHub:
   ```bash
   git add docs/
   git commit -m "Update portfolio"
   git push origin main
   ```
3. In your GitHub repo → Settings → Pages:
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/docs`
4. Site will be live at: `https://camila-rojas-molina.github.io/cv/`

## To-Do

See [todoList.txt](todoList.txt) for current tasks.

## Notes

- **Previous version**: The Three.js version is archived in the `threejs-archive` branch
- **Simple stack**: Plain HTML/CSS/JS (no build tools) for easy editing and deployment

---

**Contact:** Concordia University | Montréal, QC
