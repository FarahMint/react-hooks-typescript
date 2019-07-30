import React, { useContext} from 'react';
import { BrowserRouter as Router, Route,  Switch} from "react-router-dom";
/**STORE */
import {Store } from './store';


/**COMPONENTS */
 import Navbar from './components/Global/Navbar';
 import Footer from './components/Global/Footer';
import Home from './components/Home';
import Recipe from './components/Recipe';
import FavouriteSelection from './components/FavouriteSelection';

const App: React.FC = () => {
/** get state from context*/
 const {state}= useContext(Store);

  return ( 
    <Router>
      <Navbar {...state}/>
      

      <Switch>
        <Route  
        exact 
        path="/" 
        component={Home}/>

        <Route  
        exact 
        path="/recipes/:id" 
        component={Recipe}/> />

        <Route  
        exact 
        path="/favourites" 
        component={FavouriteSelection}/> />

      </Switch>

      <Footer/>
    </Router>
    );
}

export default App;
