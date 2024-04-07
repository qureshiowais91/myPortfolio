import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ProjectPage } from './pages/ProjectPage.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { BlogPage } from './pages/BlogPage.tsx';
import './index.css';
import { Navigate } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';


// const router = createBrowserRouter([
//   {
//     path: '/home',
//     element: <App />,
//     errorElement: <NotFoundPage />,
//   },
//   {
//     path: '/project',
//     element: <ProjectPage />,
//     errorElement: <NotFoundPage />,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path='/' element={<App />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/Project' element={<ProjectPage />} />
        <Route path='/Blog' element={<BlogPage />} />
      </Route>
      {/* throw back to Home if does not match to Defined Routes */}
      <Route path='*' element={<Navigate to='/Home' replace />} />
    </React.Fragment>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
