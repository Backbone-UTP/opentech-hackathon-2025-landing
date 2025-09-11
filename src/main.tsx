import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import CodeOfConduct from './pages/CodeOfConduct.tsx';
import TermsOfEvent from './pages/TermsOfEvent.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/code-of-conduct",
    element: <CodeOfConduct />,
  },
  {
    path: "/terms-of-event",
    element: <TermsOfEvent />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
