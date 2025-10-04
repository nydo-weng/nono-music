import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import '@/assets/css/index.less';

// redux 状态管理
import { Provider } from 'react-redux';
import store from './store';

import { HashRouter } from 'react-router-dom';

import App from '@/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
);
