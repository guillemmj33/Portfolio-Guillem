import './App.css';

import { Header, Projects, Contact, Footer } from './container';
import { Navbar } from './components';

import React from 'react';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
