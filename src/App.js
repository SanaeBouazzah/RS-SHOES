import React from 'react';
import {Article, Brand, Cta, Navbar} from './components';
import {Blog, Footer, Header, Features, Possibility, Aboutus} from './containers';
import './App.css';
import './index.css';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Article />
      <Brand />
      <Aboutus />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

