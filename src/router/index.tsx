import React, { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// 这几个都是独立组件, 可以做一个分包处理
// webpack: 通过 import() 函数做分包
// Vue/React: 路由的懒加载(路由)
// 懒加载时, 有可能东西还没下载下来, 所以要用 Suspense 包裹
const Discover = lazy(() => import('@/views/Discover'));
const Mine = lazy(() => import('@/views/Mine'));
const Download = lazy(() => import('@/views/Download'));
const Focus = lazy(() => import('@/views/Focus'));

const Album = lazy(() => import('@/views/Discover/c-views/Album'));
const Artist = lazy(() => import('@/views/Discover/c-views/Artist'));
const Djradio = lazy(() => import('@/views/Discover/c-views/Djradio'));
const Ranking = lazy(() => import('@/views/Discover/c-views/Ranking'));
const Recommend = lazy(() => import('@/views/Discover/c-views/Recommend'));
const Songs = lazy(() => import('@/views/Discover/c-views/Songs'));

const routes: RouteObject[] = [
  {
    // 这里用 Navigate 而不是直接写 Discover 组件的原因是, URL 会变, 对 SEO 或者 浏览器数书签页 友好
    path: '/',
    element: <Navigate to="/discover" />,
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />,
      },
      {
        path: '/discover/album',
        element: <Album />,
      },
      {
        path: '/discover/artist',
        element: <Artist />,
      },
      {
        path: '/discover/djradio',
        element: <Djradio />,
      },
      {
        path: '/discover/ranking',
        element: <Ranking />,
      },
      {
        path: '/discover/recommend',
        element: <Recommend />,
      },
      {
        path: '/discover/songs',
        element: <Songs />,
      },
    ],
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
