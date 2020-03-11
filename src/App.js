import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.util';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribFromAuth = null;

  componentDidMount() {
    this.unsubscribFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      // console.log('current user:  ', this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/shop' exact component={ShopPage} />
          <Route path='/signin' exact component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
