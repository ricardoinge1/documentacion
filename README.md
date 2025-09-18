# Elenix Official Documentation

<p align="center">
  <img src="static/img/logo1.svg" alt="Elenix Logo" width="150">
</p>

<h3 align="center">Official documentation for the Elenix physical space analytics platform</h3>

<p align="center">
  <a href="https://elenix-analytics.com">
    <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
  </a>
  <img src="https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg" alt="Node Version">
  <img src="https://img.shields.io/badge/build-passing-brightgreen.svg" alt="Build Status">
</p>

---

## Overview

This repository contains the complete source code and documentation for the Elenix platform, a comprehensive physical space analytics solution that empowers businesses to make data-driven decisions about their physical environments.

## 📖 Documentation

Access the complete documentation and platform resources:

**🌐 [Official Documentation](https://documentacion-weld.vercel.app)**  
**🔐 [Platform Access](https://elenix-analytics.com)**

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.0.0 or higher)
- **npm** (version 8.0.0 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ricardoinge1/documentacion.git
   cd elenix-documentation
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run start
   ```

The development server will start at `http://localhost:3000` and automatically open in your default browser.

## Development

### Available Scripts

| Command          | Description                              |
| ---------------- | ---------------------------------------- |
| `npm run start`  | Start development server with hot reload |
| `npm run build`  | Build production-ready static files      |
| `npm run serve`  | Serve built files locally for testing    |
| `npm run deploy` | Deploy to configured hosting service     |
| `npm run lint`   | Run code linting                         |
| `npm run test`   | Run test suite                           |

### Project Structure

```
elenix-documentation/
├── docs/                 # Documentation content
├── src/                  # Source code
├── static/               # Static assets
│   ├── img/             # Images and icons
│   └── css/             # Custom stylesheets
├── docusaurus.config.js  # Docusaurus configuration
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## Acknowledgments

- Built with [Docusaurus](https://docusaurus.io/) by Meta
- Icons provided by [Feather Icons](https://feathericons.com/)

---

<p align="center">
  Made with ❤️ by the Elenix Team
</p>
