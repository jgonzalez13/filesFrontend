import React from 'react';
import Banner from './components/Banner/Banner';
import Icon  from '../../../shared/Icon/Icon';
// Modal here

const Home = () => {
  return (
    <>
      <Banner />      
      <div>
        <h1 className="title">HomeView</h1>
        <button class="button is-primary">Button</button>
        <Icon name = "fas fa-home"/>
      </div>
    </>
  );
};

export default Home;
