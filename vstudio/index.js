import React from 'react';
import ReactDOM from 'react-dom';
//import component App from App.js
import App from './App';


//เอา App มาแสดงที่ตำแหน่ง root (ตำแหน่งที่ต้องการ render)
ReactDOM.render(
  <App />, //return component
  document.getElementById('root')
);
