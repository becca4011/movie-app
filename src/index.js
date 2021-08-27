import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
// 하나의 component만 rendering 가능 (2개 넣을 수 없음)
// 대신, App.js 안에서 component를 넣으면 여러 component를 사용 가능