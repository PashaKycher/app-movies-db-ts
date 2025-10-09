# MoviesDB (app-movies-db-ts)

A small React application that demonstrates fetching and displaying movies data from The Movie Database (TMDB) API using Redux Toolkit Query, Material UI (MUI), and React Router.

This repository appears to be a demo/movie-browser app with filters, search keywords, and a few informational pages.

## Key details

- Project name: `app-movies-db-ts`
- Homepage: https://github.com/PashaKycher/MoviesDB.git
- Stack: React 18, Redux Toolkit (RTK Query), React Router v6, Material UI (MUI), Leaflet (map view), localforage
- Build tool: Create React App (`react-scripts`)

## Features

- Browse and discover movies via TMDB API (paged results)
- Filter by keywords and genres
- Client-side caching and pagination via RTK Query
- Basic auth context (demo/mock login)
- Map widget and About page (Leaflet integration)

## Installation

Make sure you have Node.js (v16+) and npm installed. From the repository root:

```powershell
npm install
```

## Environment / API keys

The project currently contains a bearer token embedded directly in `src/services/tmdb.js`. This is not recommended for production or public repositories.

Recommended approach:

1. Remove the hard-coded token from `src/services/tmdb.js`.
2. Create a `.env` file in the project root and add your token there. Example (CRA-compatible env var):

```powershell
# .env (example)
REACT_APP_TMDB_BEARER=your_tmdb_bearer_token_here
```

3. Update `src/services/tmdb.js` to read the token from `process.env.REACT_APP_TMDB_BEARER` and keep the token out of source control.

If you need a token, create one in your TMDB account (or use a read-only API key where appropriate). Treat tokens as secrets.

Note: Because a token is currently in the source, consider rotating that token and removing it from the repo history if this repository is public.

## Scripts

Available npm scripts (from `package.json`):

- `npm start` — Start the development server
- `npm run build` — Create a production build
- `npm test` — Run tests
- `npm run eject` — Eject CRA configuration (irreversible)
- `npm run deploy` — Deploy to GitHub Pages (uses `gh-pages` and `predeploy` -> `build`)

Run the development server:

```powershell
npm start
```

Build for production:

```powershell
npm run build
```

Run tests:

```powershell
npm test
```

Deploy to GitHub Pages (repository must be configured for `gh-pages`):

```powershell
npm run deploy
```

## Project structure (high level)

- `public/` — Static public assets and HTML
- `src/` — Application source
  - `App.js` — Root app component (theme + AuthContext provider)
  - `index.js` — Router and app bootstrapping
  - `store.js` — Redux store configuration and RTK Query wiring
  - `services/tmdb.js` — RTK Query API slice for TMDB (contains bearer token currently)
  - `features/` — Feature folders (Home, Movies, About)
  - `hooks/` — Custom hooks

## Notes on TMDB usage

- `src/services/tmdb.js` uses Redux Toolkit Query to expose hooks:
  - `useGetMoviesQuery`
  - `useGetConfigurationQuery`
  - `useGetKeywordsQuery`
  - `useGetGenresQuery`

- The `getMovies` endpoint supports pagination and merges pages in the cache to enable infinite scrolling or 'load more' behaviour.

## Contributions

If you'd like to contribute:

1. Fork the repo and create a topic branch
2. Keep sensitive tokens out of the code
3. Open a pull request with a clear description of changes

## Troubleshooting

- If the app fails to fetch data, check that your TMDB bearer token is valid and available in `process.env.REACT_APP_TMDB_BEARER` (or embedded token in `src/services/tmdb.js` for the current code state).
- If you hit CORS or network errors, verify your network and TMDB API status.

## Recommended follow-ups

- Replace the hard-coded bearer token with an env var and remove it from git history
- Add a `.env.example` with variable names (without real secrets)
- Add basic unit tests and at least one integration/e2e flow for the movies listing

## License

Choose a license and add a `LICENSE` file if you plan to publish or share this repository widely. (No license file was detected in the repository root.)

---

If you want, I can:

- Update `src/services/tmdb.js` to read the token from an env var and add a `.env.example` (I can do this now), or
- Remove the hard-coded token and show steps to rotate it and purge from Git history.

Tell me which follow-up you'd like and I'll apply it.
