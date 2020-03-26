import React from 'react';
import './App.css';
import MyNavbar from './navbar.js';
import './stylesheet.css';
import Home from './home.js';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main>
      <div>
        <MyNavbar />
      </div>
      <div>
        <Switch>
          <Route path='/' component={Home} exact />
        </Switch>
      </div>
    </main>
  );
}

export default App;
