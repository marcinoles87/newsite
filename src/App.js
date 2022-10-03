import React  from 'react';
import {Route, Routes ,} from 'react-router-dom'


import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<HomePage></HomePage>} />
        <Route path='contact' element={<Contact></Contact>} />
        <Route path='products' element={<Products></Products>} />
      </Routes>


      

       <Nav />
        {/* <Header /> */}
        {/* <Main /> */}
        <Footer />
     
    </div>
  );
}

export default App;
