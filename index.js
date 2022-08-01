import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
  <h2>Jhow é lindo</h2>
);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<h1>Hello, world!</h1>);

const name = 'Erik dionata de Souza';
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(
  <h2>Hello, {name}</h2>
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
