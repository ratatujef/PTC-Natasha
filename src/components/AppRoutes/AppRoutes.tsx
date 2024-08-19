import {memo} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';

function AppRoutes(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage/>
    }
  ]);

  return <RouterProvider router={router}/>
}
export default memo(AppRoutes);