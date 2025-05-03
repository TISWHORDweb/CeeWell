import React from 'react';
import { useRoutes } from 'react-router-dom';
import Index from '../Pages/Home/Index';
import FractionalCFO from '../Pages/FractionalCFO';
import Contactage from '../Pages/ContactPage';
import CloudAccounting from '../Pages/CloudAccounting';
import InsightsPage from '../Pages/Insights';
import CareersPage from '../Pages/CareersPage';


export const Routes = () => {
    return useRoutes([
        {
          path: '/',
          element: < Index />
        },
        {
          path: '/services',
          element: < FractionalCFO />
        },
        {
          path: '/contact',
          element: < Contactage />
        },
        {
          path: '/accounting',
          element: < CloudAccounting />
        },
        {
          path: '/insights',
          element: < InsightsPage />
        },
        {
          path: '/career',
          element: < CareersPage />
        }
    ]);
};
