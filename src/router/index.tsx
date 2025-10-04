import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Discover from '@/views/discover';
import Mine from '@/views/mine';
import Download from '@/views/download';
import Focus from '@/views/focus';

const routes: RouteObject[] = [
  {
    // 这里用 Navigate 而不是直接写 Discover 组件的原因是, URL 会变, 对 SEO 或者 浏览器数书签页 友好
    path: '/',
    element: <Navigate to="/discover" />,
  },
  {
    path: '/discover',
    element: <Discover />,
  },
  {
    path: '/download',
    element: <Download />,
  },
  {
    path: '/focus',
    element: <Focus />,
  },
  {
    path: '/mine',
    element: <Mine />,
  },
];

export default routes;
