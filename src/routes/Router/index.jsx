import React from 'react';
import { createHashRouter } from 'react-router-dom';
import Root from '../Root';
import Error from '../../pages/Error';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Stay from '../../pages/Stay';
import { staysLoader, stayLoader } from '../../utils/loaders';

export default createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Root outlet={<Error />} />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: staysLoader,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'stays/:stayId',
        element: <Stay />,
        loader: stayLoader,
      },
      {
        path: 'error',
        element: <Error />,
      },
    ],
  },
]);
