import { useState } from 'react';
import initialState from '../../public/initialState/InitialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [ ...state.cart, payload ],
    });
  }

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [ ...state.buyer, payload ],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      order: [ ...state.order, payload ],
    });
  };

  return { 
    addToCart,
    addToBuyer,
    addNewOrder,
    removeFromCart, 
    state
  };
};

export default useInitialState;