# Indie Painter

Live demo: https://indie-painter.vercel.app

A lightweight browser painting app — draw, erase, pick colors, change brush size, undo/redo and export your artwork as an image. Built with plain JavaScript and focused on a small, fast, and friendly user experience.

## Table of contents
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Project structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- Freehand drawing on a responsive HTML canvas
- Color picker and preset colors
- Adjustable brush size
- Eraser mode
- Undo / Redo history
- Export canvas to PNG
- Small, dependency-light JavaScript codebase

## Demo
Open the live demo: https://indie-painter.vercel.app

## Tech stack
- JavaScript (vanilla)
- HTML5 Canvas
- CSS

(Repository language shows JavaScript — replace with actual stack details if additional frameworks are used.)

## Getting started

Prerequisites
- Node.js (v14+ recommended) and npm or yarn

Clone the repo
```bash
git clone https://github.com/zixihong/indie-painter.git
cd indie-painter
```

Install dependencies
```bash
npm install
# or
yarn
```

Start development server
```bash
npm run dev
# or
yarn dev
```

Build for production
```bash
npm run build
# or
yarn build
```

Start the production server (if applicable)
```bash
npm start
# or
yarn start
```

Note: If this project uses different scripts (for example a Vite/Parcel/Webpack setup), update the commands above to match package.json.

## Usage
- Choose a color or use the color picker.
- Adjust brush size using the slider.
- Use the eraser toggle to remove parts of the drawing.
- Use undo/redo buttons to step through changes.
- Export your drawing as a PNG/ image file using the save/export button.

## Project structure (example)
```
/
├─ index.html
├─ src/
│  ├─ app.js
│  └─ styles.css
├─ public/
└─ package.json
```
Adjust this section to match the repository's actual structure.

## Deployment
This project is easily deployable to static hosts (Vercel, Netlify, GitHub Pages). For Vercel:
- Connect the repository to Vercel
- Build command: npm run build
- Output directory: dist (or the directory configured by your bundler)

Live site: https://indie-painter.vercel.app

## Contributing
Contributions are welcome. If you want to:
- Open an issue describing a bug or feature
- Submit a pull request with improvements

Please follow these steps:
1. Fork the repository
2. Create a branch: git checkout -b feat/my-feature
3. Make changes and add tests if applicable
4. Submit a PR describing your change

If you want, tell me what contribution guidelines or code style you prefer and I can add a CONTRIBUTING.md.

## License
No license file is included in the repository. If you want this project to be open-source, add a license (MIT, Apache-2.0, etc.) and I can update this README accordingly.