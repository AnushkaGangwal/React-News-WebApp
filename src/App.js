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
import Bookmarks from './bookmarks.js';
import Search from './searchGuardian.js';
import SearchNY from './searchNY.js';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isGuardian: true,
      myQuery: null,
      bookmarksTab: false,
      searchTab: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.setTabFunction = this.setTabFunction.bind(this);
    this.setBMTabFunction = this.setBMTabFunction.bind(this);
    this.setSearchTabFunction = this.setSearchTabFunction.bind(this);
    this.resetKeyword = this.resetKeyword.bind(this);
  }


  componentDidMount() {
    if(localStorage.getItem("isGuardian")) {
      this.setState({
        isGuardian: JSON.parse(localStorage.getItem("isGuardian"))
      });
    }
    else
      localStorage.setItem("isGuardian", JSON.stringify(this.state.isGuardian));
  }

  handleChange(isGuardianProp) {
    this.setState({
        isGuardian: isGuardianProp
    });
    localStorage.setItem("isGuardian", JSON.stringify(isGuardianProp));
  }

  handleSearchQuery(myKey) {
    this.setState({
      myQuery: myKey,
      searchTab: true
    })
  }

  setTabFunction() {
    this.setState({
        searchTab: false,
        bookmarksTab: false
      })
  }

  setBMTabFunction() {
    this.setState({
        searchTab: false,
        bookmarksTab: true
      })
  }

  setSearchTabFunction() {
    this.setState({
        searchTab: true,
        bookmarksTab: false
      })
  }

  resetKeyword() {
    if(this.state.myQuery != "") {
      this.setState({
        myQuery: ""
      });
    }
  }

  render() {
    return (
      <main>
        <div>
          <MyNavbar onToggle={this.handleChange} isGuardianProp={this.state.isGuardian} searchResetProp={this.resetKeyword} searchPage={this.handleSearchQuery} searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} searchQProp={this.state.myQuery}/>
        </div>
        {this.state.isGuardian && 
          <div>
            <Switch>
              <Route path='/' component={() => <Home searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} setTab={this.setTabFunction}/>} exact />
              <Route path='/world' component={() => <World searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} setTab={this.setTabFunction}/>} />
              <Route path='/politics' component={() => <Politics searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} setTab={this.setTabFunction}/>} />
              <Route path='/business' component={() => <Business searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} setTab={this.setTabFunction}/>} />
              <Route path='/technology' component={() => <Tech searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} setTab={this.setTabFunction}/>} />
              <Route path='/sports' component={() => <Sports searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} setTab={this.setTabFunction}/>} />
              <Route path='/expanded' component={() => <ExpandedCard searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} setTab={this.setSearchTabFunction} searchResetProp={this.resetKeyword}/>} />
              <Route path='/bookmarks' component={() => <Bookmarks searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} setTab={this.setBMTabFunction}/>} />
              <Route path='/search' component={() => <Search searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} setTab={this.setSearchTabFunction}/>} />
            </Switch>
          </div>
        }
        {!this.state.isGuardian &&
          <div>
            <Switch>
              <Route path='/' component={() => <HomeNY searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} setTab={this.setTabFunction}/>} exact />
              <Route path='/world' component={() => <WorldNY searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} setTab={this.setTabFunction}/>} />
              <Route path='/politics' component={() => <PoliticsNY searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} setTab={this.setTabFunction}/>} />
              <Route path='/business' component={() => <BusinessNY searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} setTab={this.setTabFunction}/>} />
              <Route path='/technology' component={() => <TechNY searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} setTab={this.setTabFunction}/>} />
              <Route path='/sports' component={() => <SportsNY searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} setTab={this.setTabFunction}/>} />
              <Route path='/expanded' component={() => <ExpandedCardNY searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} setTab={this.setSearchTabFunction} searchResetProp={this.resetKeyword}/>} />
              <Route path='/bookmarks' component={() => <Bookmarks searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} setTab={this.setBMTabFunction}/>} />
              <Route path='/search' component={() => <SearchNY searchTabProp={this.state.searchTab} bookmarksTabProp={this.state.bookmarksTab} setTab={this.setSearchTabFunction}/>} />
            </Switch>
          </div>
        }
      </main>
    );  
  }
}

export default App;