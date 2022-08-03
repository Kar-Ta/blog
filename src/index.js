import React from 'react';
import ReactDOM from 'react-dom/client';
import Bpage from './Bpage';
import './index.css';
import Navbar from './Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar />
    <Bpage />
  </div>
);

