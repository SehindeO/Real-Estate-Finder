import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import  './App.css'
import Subsidiaries from './components/Subsidiaries/subsidiaries';
import Properties from './components/Properties/Properties';
import Value from './components/Value/Value';



function App() {
  return (
    <div className="App">
      <div>
        <div className= "white-gradient"/>
      <Header />
      <Hero />
      </div>
    <Subsidiaries/>
    <Properties/>
    <Value/>
    </div>
  
  );
}

export default App;





