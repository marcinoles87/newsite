import React  from 'react';
import {Route, Routes ,} from 'react-router-dom'


import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Nav/>} />
      </Routes>

      

       
        <Header />
        <Main />
        <Footer />
     
    </div>
  );
}

export default App;
