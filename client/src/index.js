import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/layout/Navigation';
import Layout from './Layout';
import About from './components/pages/About';
import Courses from './components/pages/Courses';
import Help from './components/pages/Help';
import Myfooter from './components/layout/Myfooter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation/>
  
      <Routes>
        
        <Route path='/App' element={<App />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Courses' element={<Courses/>} />
        <Route path='/Help' element={<Help/>} />
        <Route path='/' element={<App />} />
      </Routes>
      <div>
      <footer>
      <Myfooter/>
      </footer>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
