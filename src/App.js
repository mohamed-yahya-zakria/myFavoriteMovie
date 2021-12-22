 import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Footer from './component/layout/Footer';
import NavBar from './component/layout/NavBar';
import {HashRouter as Router, Route }from 'react-router-dom';
import Landing from './component/home/Landing';
import Movie from './component/home/Movie'; 
import store from './store'
import css from './App.css'

// we can also use browserRotuer but may be get issus when we upload it in gitHub therefore we used Hash router
/* import {BrowserRouter as Router }from 'react-router-dom' */


 class App extends Component {

  render() {
    return (
      <Provider store={store}> 
        <Router>  
          <div> 
            <NavBar/>
            <Route exact path='/' component={Landing}/>
            <Route exact path="/movie/:id" component={Movie}/>
            <Footer/>
          </div>
        </Router>
     </Provider>
  
    );
  }
}

export default App; 
