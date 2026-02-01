# Camila Rojas Molina Portfolio

Multi-page portfolio website for Camila Rojas Molina, Computer Science student at Concordia University, Montréal. Built with **Tailwind CSS** for modern, responsive design.

## Live Site

**URL:** https://camila-rojas-molina.github.io/cv/

## Tech Stack

- **HTML5** – Semantic markup
- **Tailwind CSS** – Utility-first styling
- **Vanilla JavaScript** – Form handling and interactions
- **GitHub Pages** – Hosting

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
│   │   └── style.css      # Compiled Tailwind CSS
│   ├── js/
│   │   └── main.js
│   ├── images/            # Profile and project images
│   └── downloads/         # PDF CV
├── src/
│   └── input.css          # Tailwind source file
├── tailwind.config.js     # Tailwind configuration
├── package.json
└── README.md
```

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Run development mode (watches for changes)

```bash
npm run dev
```

This watches your HTML files and rebuilds Tailwind CSS automatically.

### 3. View locally

Open `docs/index.html` in your browser or use a local server:

```bash
cd docs
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Build for Production

```bash
npm run build
```

This creates a minified CSS file in `docs/css/style.css`.

## Deployment (GitHub Pages)

1. Make your changes and build:
   ```bash
   npm run build
   ```

2. Commit and push:
   ```bash
   git add docs/ src/ tailwind.config.js
   git commit -m "Update portfolio with Tailwind"
   git push origin main
   ```

3. In your GitHub repo → **Settings** → **Pages**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/docs**

4. Site will be live at: `https://camila-rojas-molina.github.io/cv/`

## Customization

### Colors

Edit custom colors in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#0066cc',
      secondary: '#0052a3',
    },
  },
}
```

### Component Styles

Add reusable component classes in `src/input.css`:

```css
@layer components {
  .btn {
    @apply px-6 py-3 rounded-md font-medium transition-all;
  }
}
```

## To-Do

See [todoList.txt](todoList.txt) for current tasks.

## Notes

- **Previous version**: The Three.js version is archived in the `threejs-archive` branch
- **Modern stack**: Tailwind CSS for rapid UI development and design customization

---

**Contact:** Concordia University | Montréal, QC
