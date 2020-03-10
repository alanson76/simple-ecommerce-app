import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Nav from './components/nav/nav.component';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/shop' exact component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
