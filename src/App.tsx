import React, { Suspense } from 'react';
import { Link, useRoutes } from 'react-router-dom';
import routes from '@/router';

import { useAppSelector, useAppDispatch, shallowEqualApp } from './store';
import { changeMessageAction } from './store/modules/counter';

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message,
    }),
    shallowEqualApp,
  );

  const dispatch = useAppDispatch();

  function handleChangeMessage() {
    dispatch(changeMessageAction('message changed'));
  }
  return (
    <div className="App">
      <div className="nav">
        <Link to="discover">发现音乐</Link>
        <Link to="mine">我的音乐</Link>
        <Link to="focus">关注</Link>
        <Link to="download">下载客户端</Link>
      </div>
      <h2>当前计数: {count}</h2>
      <h2>当前消息: {message}</h2>
      <button onClick={handleChangeMessage}>修改 message </button>
      {/* 这个 fallback 也可以写一个组件 */}
      <Suspense fallback="loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
}

export default App;
