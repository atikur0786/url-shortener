# 🔗 URL Shortener

A simple, elegant URL shortening application built with **React**, **TypeScript**, **Redux**, and **Tailwind CSS**.

![Preview](./preview.png) <!-- Replace with your actual image name if different -->

---

## 🚀 Features

- Shorten any valid URL with a single click
- Copy shortened URLs to clipboard with visual feedback
- Responsive design that works on all devices
- Persistent storage of shortened URLs
- Clean, modern UI with Tailwind CSS

---

## 🖥️ Demo

<!-- Add demo link here if deployed -->

---

## 🛠️ Technologies Used

- **React** – UI library for building the interface
- **TypeScript** – For type-safe code
- **Redux Toolkit** – For state management
- **Tailwind CSS** – For styling
- **Vite** – For fast development and building
- **CleanURI API** – For URL shortening functionality

---

## 🏗️ Project Structure

url-shortener/
├── src/
│ ├── components/
│ │ ├── ShortenerList.tsx # Displays the list of shortened URLs
│ │ └── UrlShortener.tsx # Input form for shortening URLs
│ ├── features/
│ │ └── urlShortenerSlice.ts # Redux slice for URL state
│ ├── hooks/
│ │ └── redux.ts # Custom Redux hooks
│ ├── types/
│ │ └── store.ts # TypeScript type definitions
│ ├── App.tsx # Main application component
│ ├── main.tsx # Entry point
│ └── store.ts # Redux store configuration
├── public/
│ └── ... # Static assets
└── ... # Configuration files

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/atikur0786/url-shortener.git
cd url-shortener
```

Install dependencies:

```bash
npm install
# or
yarn
```

Start the development server:

```bash
npm run dev
# or
yarn dev
```
