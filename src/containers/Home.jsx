/* eslint-disable arrow-body-style */
import React from 'react';
import Products from '../components/Products';
import initialState from '../../public/initialState/InitialState';

const Home = () => {
  return (
    <Products products={initialState.products}/>
  );
};

export default Home;