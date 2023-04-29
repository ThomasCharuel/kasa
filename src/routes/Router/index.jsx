import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import Error from '../../pages/Error';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Stay, { loader as stayLoader } from '../../pages/Stay';

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/about',
            element: <About />,
          },
          {
            path: 'stays/:stayId',
            element: <Stay />,
            loader: stayLoader,
          },
        ],
      },
    ],
  },
]);
