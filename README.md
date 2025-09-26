# 🎂 Happy Birthday Jasmine Website ❤️

A beautiful, personalized birthday website built with React, Vite, and Tailwind CSS.

## Features

- 🌹 Beautiful gradient backgrounds with romantic colors
- ✨ Elegant typography using Google Fonts (Dancing Script, Playfair Display)
- 📱 Fully responsive design
- 🎨 Smooth page transitions and animations
- 💖 Each letter page celebrates different qualities
- 🧭 Interactive navigation bar
- 💌 Heartfelt, personal content

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd "Her Birthday Gift/birthday-website"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit the URL shown in the terminal (usually http://localhost:5173)

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `dist` folder.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will automatically detect it's a Vite project and deploy

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify's deploy area

### Other Platforms
The `dist` folder contains static files that can be deployed to any web hosting service.

## Customization

### Updating Content
- **Home page**: Edit `src/pages/Home.jsx`
- **Letter pages**: Edit individual files in `src/pages/` (J.jsx, A.jsx, etc.)
- **Colors**: Modify `tailwind.config.js`
- **Fonts**: Update the Google Fonts import in `src/index.css`

### Adding Images
Place images in the `public` folder and reference them as `/image-name.jpg` in your components.

## Project Structure

```
src/
├── pages/
│   ├── Home.jsx      # Main birthday letter
│   ├── J.jsx         # Letter J page
│   ├── A.jsx         # Letter A page
│   ├── S.jsx         # Letter S page
│   ├── M.jsx         # Letter M page
│   ├── I.jsx         # Letter I page
│   ├── N.jsx         # Letter N page
│   ├── E.jsx         # Letter E page
│   └── Final.jsx     # Closing page
├── components/
│   ├── LetterLayout.jsx  # Reusable layout for letter pages
│   └── Navbar.jsx        # Navigation component
├── App.jsx           # Main app with routing
├── main.jsx          # Entry point
└── index.css         # Tailwind CSS and custom styles
```

## Technologies Used

- ⚛️ React 18
- ⚡ Vite
- 🎨 Tailwind CSS
- 🧭 React Router DOM
- 🎭 Google Fonts

---

Made with 💖 for the most amazing person in the world!