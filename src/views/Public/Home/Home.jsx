import React from 'react';
import Banner from './ components/Banner';

const Home = () => {
  return (
    <>
      <Banner />
      <div>
        <h1 className="title">HomeView</h1>
        <button class="button is-primary">Button</button>
      </div>
    </>
  );
};

export default Home;
