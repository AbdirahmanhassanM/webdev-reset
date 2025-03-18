# Abdirahman's Website

A modern web application built with Vue 3, TypeScript, and Node.js.

## Features

- User authentication (Sign In/Sign Up)
- Modern UI with UnoCSS
- TypeScript support
- Vue 3 Composition API
- Pinia for state management
- Vue Router for navigation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
.
├── src/
│   ├── components/     # Vue components
│   ├── composables/    # Vue composables
│   ├── stores/        # Pinia stores
│   ├── router/        # Vue router configuration
│   ├── types/         # TypeScript types
│   └── utils/         # Utility functions
├── backend/
│   └── src/
│       ├── controllers/  # Route controllers
│       ├── middleware/   # Express middleware
│       ├── routes/       # API routes
│       ├── services/     # Business logic
│       └── types/        # TypeScript types
└── public/           # Static assets
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Start production server

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 