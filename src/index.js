import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './features/About/About';
import Movies from './features/Movies/Movies';
import { Provider } from 'react-redux';
import store from './store';
import Home from './features/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/app-movies-db-ts/",
    element: (
    <Provider store={store}>
      <App />
    </Provider>),
    children: [
      {
        path: "app-movies-db-ts/",
        element: <Home />,
      },
      {
        path: "app-movies-db-ts/movies",
        element: <Movies />,
      },
      {
        path: "app-movies-db-ts/about",
        element: <About />,
      },
    ]
  },]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
