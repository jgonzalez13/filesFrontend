import React from 'react';
import Footer from '../../../shared/Footer/Footer';
import Banner from './components/Banner/Banner';
// Modal here

const Home = () => {
  return (
    <>
      <Banner />
      <div>
        <h1 className="title">HomeView</h1>
        <button class="button is-primary">Button</button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
