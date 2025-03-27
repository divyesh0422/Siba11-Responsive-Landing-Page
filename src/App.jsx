import React from 'react';
import HeroSection from "./components/HeroSection";
import Navbar from './components/Navbar';

import DishCard from './components/DishCard';

const App = () => {
  return (
    <>
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <Navbar />
      <HeroSection />

    
    </main>
    </>
  );
};

export default App;
