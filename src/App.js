import React from 'react'
import './index.css'
import HomePage from './routes/HomePage';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact'
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

import NavBar from './components/NavBar'
function App() {
  return (
    <> 
    <div className='app-container'>
    <NavBar></NavBar>
    <Routes>
   
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/project' element={<Project></Project>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
    
    </>
  );
}

export default App;
