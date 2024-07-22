import React from 'react';
import { useRoutes } from 'react-router-dom';
import Index from '../Pages/Home/Index';


export const Routes = () => {
    return useRoutes([
        {
          path: '/',
          element: < Index />
        }
    ]);
};
