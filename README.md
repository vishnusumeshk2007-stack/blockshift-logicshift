# blockshift-logicshift
GDG Competition
# LogicShift — Developer Portfolio

A modern, interactive developer portfolio built to showcase projects, technical skills, experiments, and the development journey of **LogicShift**.

The portfolio combines a clean developer-focused interface with interactive UI elements, project showcases, terminal-inspired components, and a distinctive visual identity.

## 🌐 Live Demo

[Visit the Live Website](https://vishnu-logicshift-blockshift.netlify.app/)

## ✨ Features

* Modern responsive portfolio interface
* Developer-focused landing page
* Projects showcase
* Technical skills section
* Interactive terminal-style component
* Build monitor / experiment sections
* Contact section
* Responsive navigation
* Custom reusable React components
* Structured project and site configuration
* Netlify deployment configuration
* Responsive design for desktop and mobile devices

## 🛠️ Tech Stack

* **React**
* **Vite**
* **JavaScript / JSX**
* **CSS**
* **HTML5**
* **Node.js / npm**
* **Netlify** for deployment

## 📁 Project Structure

```text
logicshift-portfolio/
│
├── public/
│   ├── _redirects
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── BuildMonitor.jsx
│   │   ├── CitySkyline.jsx
│   │   ├── ContactSection.jsx
│   │   ├── ExperimentLog.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── PixelMark.jsx
│   │   └── Terminal.jsx
│   │
│   ├── data/
│   │   ├── projects.js
│   │   ├── siteConfig.js
│   │   └── skills.js
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── ProjectsPage.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── netlify.toml
├── package.json
├── package-lock.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### 1. Clone the repository

```bash
git clone https://github.com/vishnusumeshk2007-stack/blockshift-logicshift.git
```

### 2. Open the project

```bash
cd blockshift-logicshift
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

Open that URL in your browser.

## 📦 Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm install`     | Installs project dependencies         |
| `npm run dev`     | Starts the development server         |
| `npm run build`   | Creates a production build            |
| `npm run preview` | Previews the production build locally |

## 🌐 Deployment

The project includes a `netlify.toml` configuration and can be deployed using Netlify.

Typical deployment flow:

```text
GitHub Repository
       ↓
     Netlify
       ↓
Production Website
```

The project can also be deployed manually using a production build:

```bash
npm run build
```

## 🎨 Design & Architecture

The application is organized into reusable React components rather than placing the entire interface in a single file.

Major areas include:

* **Pages** — main application views
* **Components** — reusable interface elements
* **Data** — project, skill, and site configuration
* **Public** — static assets and deployment-related files

This structure makes it easier to update the portfolio without modifying unrelated parts of the application.

## 🤖 Development

This project was developed with AI-assisted development tools alongside human direction, design decisions, testing, and iteration.

AI assistance was used as part of the development workflow, while the project structure, requirements, visual direction, and final implementation were reviewed and refined during development.

## 🔮 Future Improvements

Possible future additions include:

* More project case studies
* GitHub API integration
* Live project statistics
* Improved animations and micro-interactions
* Blog / developer notes section
* Dark/light theme customization
* Additional accessibility improvements
* Automated deployment and CI checks

## 📄 License

This project is intended as a personal developer portfolio.

Unless otherwise stated, the original project code, design, and assets are not licensed for unrestricted redistribution.

---

### Built with curiosity, experimentation, and a lot of code.

**LogicShift**
