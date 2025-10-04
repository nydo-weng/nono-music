import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import '@/assets/css/index.less';
import '@/assets/css/common.less';

import App from '@/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
