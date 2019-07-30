import React, { useContext
  // , useEffect 
} from 'react';
import { BrowserRouter as Router, Route,  Switch} from "react-router-dom";

import {Store } from './Store';
// import { RecipeProps} from './interfaces';
// import {fetchDataAction, toggleFavAction } from './action';

/**COMPONENTS */
 import Navbar from './components/Global/Navbar';
 import Footer from './components/Global/Footer';
 
 
import Home from './components/Home';
 
import Recipe from './components/Recipe';
import FavouriteSelection from './components/FavouriteSelection';

const App: React.FC = () => {

 const {state
  // , dispatch
}= useContext(Store);

  /**effect hook to get data as oon as user land in the page */
  // useEffect( () => {
  //   // if nothing in the arr then run action
  //   if( state.recipes.length === 0) fetchDataAction(dispatch);     
  // });

//   //create action
//   const fetchDataAction = async()=>{
//     // const REACT_APP_API_KEY= "f97a33d2078479b478ea3e4a82adaaae";
//     // const URL = `https://www.food2fork.com/api/search?key=${REACT_APP_API_KEY}`;
//     try{
//       //1 fetch data
//       const data = await fetch('../data.json');
//       //2 once we have data convert to json   
//       // const dataJSON= await data.json();
//       const dataJSON= await data.json();
    
//       // 3 return dispatch - so we can send our data to our action
//       //which then sentd to our reducer - which then update our store
//       return dispatch({
//         // name of our action
//         type:'FETCH_DATA',
//         //data we get from the fetch
//         // payload: dataJSON
//         payload: dataJSON
//       })

//     }catch(err){
//       console.log(err);
//     }
     
//   }


// const toggleFavAction =(recipe:IRecipesAPI):IAction => {
//   // 1- check if recipe is in our fav arr
//   const recipeInFav=  state.favourites.includes(recipe);
    
//   let defaultDispatchObj={
//     type:'ADD_FAV',
//     payload: recipe
//   }
//     // if recipe attribute exist inside fav arr
//     if(recipeInFav){
//       // take recipe out of fav array
//       const recipeRemovedOutFav = 
//       state.favourites.filter((fav:IRecipesAPI) => fav.recipe_id !== recipe.recipe_id) 
//       // give new array to payload
//       // change dispatch object to have a different action
//       defaultDispatchObj={
//         type:'REMOVE_FAV',
//         payload: recipeRemovedOutFav
//       }
//     }

//     //dispatch whatever object it is
//  return dispatch(defaultDispatchObj);
//  }




//  const props: RecipeProps = {
//   recipes: state.recipes.recipes,
//   currentState:{state, dispatch},
//   toggleFavAction,
//   favourites : state.favourites ,
 
// }
 

return (
   
  <Router>
    <Navbar 
     {...state}
    />
    

    <Switch>
      <Route  
      exact 
      path="/" 
      // component={()=> <Home {...props}/> }
      component={Home}
      
      />

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
