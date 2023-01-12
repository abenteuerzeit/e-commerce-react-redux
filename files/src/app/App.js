import React from 'react';

import './App.css';
import { Inventory } from '../features/inventory/Inventory';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter';
import { Cart } from '../features/cart/Cart';
import { SearchTerm } from '../features/searchTerm/SearchTerm';


export default function App(props) {
  const { state, dispatch } = props;
  let inventory = state.inventory;
  
  if (state.searchTerm !== "") {
    inventory = state.inventory.filter((i) =>
      i.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
  }

  return (
    <div className="App">
      <div>
          <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />
          <CurrencyFilter
            currencyFilter={state.currencyFilter}
            dispatch={dispatch}
          />
          <Inventory
            inventory={inventory}
            currencyFilter={state.currencyFilter}
            dispatch={dispatch}
          />
          <Cart
            cart={state.cart}
            currencyFilter={state.currencyFilter}
            dispatch={dispatch}
          />
      </div>
    </div>
  );
}
