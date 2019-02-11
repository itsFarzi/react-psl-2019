import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom' ;
import Header from './component/header' ;
import Footer from './component/footer' ;
import Home from './component/home' ;
import Teams from './component/teams' ;
import Team from './component/team'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header/>
        <Route exact  path="/" component={Home}/>
        <Route  exact path="/team" component={Teams} />
        <Route exact path="/team/:id" component={Team} />
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
