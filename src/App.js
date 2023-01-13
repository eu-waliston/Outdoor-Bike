import React from 'react';
import './app.css'

import Bike from './components/bike/Bike'
import Nav from './components/nav/Nav'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className="App">
      <Nav />
      <Bike />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
