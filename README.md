# Movie Search App

A modern movie search web application built with React that allows users to discover popular movies, search for movies, and save their favorite movies locally.

---

## Features

- Search movies using the TMDB API
- View popular trending movies
- Add and remove favorite movies
- Favorites stored using LocalStorage
- Responsive movie card layout
- React Router navigation
- Context API state management
- Clean and reusable component structure
- Error handling and loading states

---

# Tech Stack

- React
- React Router DOM
- Context API
- CSS3
- TMDB API

---

# Project Structure

```bash
src/
│
├── assets/
│   ├── components/
│   │   ├── movie-card.jsx
│   │   └── navbar.jsx
│   │
│   ├── pages/
│   │   ├── home.jsx
│   │   └── favorite.jsx
│   │
│   ├── css/
│   │   ├── app.css
│   │   ├── home.css
│   │   ├── moviecard.css
│   │   ├── navbar.css
│   │   └── fav.css
│
├── context/
│   └── context.jsx
│
├── api/
│   └── api.js
│
└── App.jsx
```

---

# Installation

## 1. Clone Repository

```bash
git clone https://github.com/your-username/movie-search-app.git
```

---

## 2. Navigate To Project

```bash
cd movie-search-app
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Start Development Server

```bash
npm run dev
```

---

# Environment Variables

Create a `.env` file in the root directory.

```env
VITE_TMDB_API_KEY=your_api_key_here
```

Get your API key from:

:contentReference[oaicite:0]{index=0}

---

# API Used

This project uses the TMDB API for fetching movie data.

Endpoints used:

```bash
/movie/popular
/search/movie
```

---

# Screenshots

*<img width="1827" height="1052" alt="image" src="https://github.com/user-attachments/screenshots/home.png" />
*

```

---

# What I Learned

- React component architecture
- React Router navigation
- State management using Context API
- API fetching with async/await
- LocalStorage handling
- Conditional rendering
- Error and loading state management

---

# Author

Ayush

---

# License

This project is for learning and personal development purposes.
