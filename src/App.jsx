import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Cards from './Cards';
import data from './Data'; // Adjust the path as necessary
import './App.css';

function App() {
 let Elemnent= data.map((item) => (
    <Cards
      key={item.id} // Use a unique key for each component
      imageUrl={item.imageUrl}
      headerImageUrl={item.headerImageUrl}
      score={item.rating.score}
      location={item.rating.location}
      count={item.rating.count}
      title={item.title}
      amount={item.price.amount}
    />
  ))
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className='center-align'>
      {Elemnent}
      </div>
    </>
  );
}

export default App;
