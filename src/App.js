import React from 'react';
import './App.css';
import MyNavbar from './navbar.js';
import './stylesheet.css';
import Home from './home.js';
import World from './world.js';
import Politics from './politics.js';
import Business from './business.js';
import Tech from './technology.js';
import Sports from './sports.js';
import HomeNY from './homeNY.js';
import WorldNY from './worldNY.js';
import PoliticsNY from './politicsNY.js';
import BusinessNY from './businessNY.js';
import TechNY from './technologyNY.js';
import SportsNY from './sportsNY.js';
import ExpandedCard from './expandedCard.js';
import ExpandedCardNY from './expandedCardNY.js';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isGuardian: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(isGuardianProp) {
    this.setState({
      isGuardian: isGuardianProp
    });
  }

  render() {
    return (
      <main>
        <div>
          <MyNavbar onToggle={this.handleChange} isGuardianProp={this.state.isGuardian}/>
        </div>
        {this.state.isGuardian && 
          <div>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/world' component={World} />
              <Route path='/politics' component={Politics} />
              <Route path='/business' component={Business} />
              <Route path='/technology' component={Tech} />
              <Route path='/sports' component={Sports} />
              <Route path='/expanded' component={ExpandedCard} />
            </Switch>
          </div>
        }
        {!this.state.isGuardian &&
          <div>
            <Switch>
              <Route path='/' component={HomeNY} exact />
              <Route path='/world' component={WorldNY} />
              <Route path='/politics' component={PoliticsNY} />
              <Route path='/business' component={BusinessNY} />
              <Route path='/technology' component={TechNY} />
              <Route path='/sports' component={SportsNY} />
              <Route path='/expanded' component={ExpandedCardNY} />
            </Switch>
          </div>
        }
      </main>
    );
  }
}

export default App;
