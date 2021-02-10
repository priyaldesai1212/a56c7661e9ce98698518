import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Asteroid from './components/Asteroid/index.js'
import AsteroidList from './components/AsteroidList/index.js'
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Route exact  path="/" component={Asteroid} />
      <Route path="/asteroidList" component={AsteroidList} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
