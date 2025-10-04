import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router';
import Demo from './views/demo';

function App() {
  return (
    <div className="App">
      <div className="main">{useRoutes(routes)}</div>
    </div>
  );
}

export default App;
