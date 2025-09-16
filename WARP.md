# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Charles Ochieng, a Cloud Infrastructure Engineer and DevOps Engineer. The project is a React-based single-page application (SPA) with Docker containerization support.

## Repository Structure

```
my-portfolio/
├── portfolio-react/          # Main React application
│   ├── src/
│   │   ├── components/       # Reusable React components (Header, Footer)
│   │   ├── pages/           # Page components (Home, About, Projects, etc.)
│   │   └── styles/          # CSS styling files
│   ├── public/              # Static assets
│   ├── package.json         # Node.js dependencies and scripts
│   └── Dockerfile          # Multi-stage Docker build
└── README.md               # GitLab template README
```

## Development Commands

### Setup and Installation
```bash
cd portfolio-react
npm install
```

### Development Server
```bash
cd portfolio-react
npm start
# Starts development server at http://localhost:3000
```

### Build for Production
```bash
cd portfolio-react
npm run build
# Creates optimized production build in build/ directory
```

### Testing
```bash
cd portfolio-react
npm test
# Runs Jest tests in interactive watch mode

# Run tests once without watch mode
npm test -- --watchAll=false

# Run specific test file
npm test -- --testPathPattern=App.test.js
```

### Docker Commands
```bash
cd portfolio-react

# Build Docker image
docker build -t portfolio-react .

# Run container
docker run -p 8080:80 portfolio-react
# Access at http://localhost:8080
```

## Architecture Overview

### Technology Stack
- **Frontend Framework**: React 19.1.0 with React Router DOM for client-side routing
- **Build Tool**: Create React App (react-scripts 5.0.1)
- **Testing**: React Testing Library with Jest
- **Email Service**: EmailJS for contact form functionality
- **Icons**: Font Awesome icons
- **Containerization**: Docker with nginx serving static files

### Application Structure

#### Single-Page Application Design
The application uses React Router for client-side navigation with the following routes:
- `/` - Home page (comprehensive landing page with all sections)
- `/about` - About page (placeholder)
- `/services` - Services page (placeholder)
- `/projects` - Projects page (placeholder)
- `/blog` - Blog page (placeholder)
- `/contact` - Contact page (placeholder)

**Note**: Most content is actually rendered on the Home page (`/`), which includes hero, about, skills, projects, and contact sections. The individual route pages contain mostly placeholder content.

#### Component Architecture
- **App.js**: Main application component with routing setup
- **Header.js**: Navigation component with responsive mobile menu
- **Footer.js**: Footer with contact info and social links
- **Home.js**: Main content page with inline styling and embedded components

#### Styling Approach
The project uses a hybrid styling approach:
- Global CSS in `styles/global.css` for base styles and utilities
- Component-specific CSS files (e.g., `Header.css`, `Footer.css`)
- Extensive inline styling in the Home component for section-specific designs
- Responsive design using CSS clamp() functions and media queries

#### Contact Form Integration
- Uses EmailJS for email functionality without backend server
- Form state managed with React hooks
- EmailJS service credentials are currently hardcoded (needs environment variables)

## Key Development Considerations

### EmailJS Configuration
The contact form uses hardcoded EmailJS credentials in `Home.js`. For development:
- Service ID: `service_x9oq0pf`
- Template ID: `template_se4q6he`
- Public Key: `VKdJ9CuLlJWxJNjp2`

**Security Note**: Move these to environment variables for production.

### External Dependencies
- Profile image expected at `/assets/images/profile.jpg` in public directory
- Blog links to external Hashnode blog: `https://charlesochieng.hashnode.dev/`
- CV download links to OneDrive document

### Project URLs Referenced in Code
- GitLab: `https://gitlab.com/cloudchuck/`
- GitHub repositories for showcased projects
- Social media profiles (LinkedIn, Twitter, Instagram, Facebook)

### Docker Deployment
The Dockerfile uses a multi-stage build:
1. **Build stage**: Node.js 18 Alpine for building React app
2. **Production stage**: nginx Alpine for serving static files
3. Exposes port 80, suitable for container orchestration

## Development Workflow

### Making Changes
1. Navigate to `portfolio-react` directory for all development work
2. Use `npm start` for live development with hot reloading
3. Test changes with `npm test`
4. Build production version with `npm run build` before deployment

### Common File Locations
- Main application logic: `src/App.js`
- Home page content: `src/pages/Home.js`
- Navigation: `src/components/Header.js`
- Global styles: `src/styles/global.css`
- Package configuration: `package.json`

### Testing Strategy
- Unit tests for React components using React Testing Library
- Test files follow `*.test.js` naming convention
- Default Create React App test configuration with Jest

This project represents a professional portfolio showcase with a focus on Cloud Infrastructure and DevOps expertise, built with modern React practices and containerization support.