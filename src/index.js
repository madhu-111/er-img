import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // This is optional, used for styling
import App from './App';  // Import the main App component
import reportWebVitals from './reportWebVitals';  // Optional, for performance tracking

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // The root div in index.html
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
