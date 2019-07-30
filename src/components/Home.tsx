import React, { useContext, useEffect } from 'react';
 

 /** STORE  -INTERFACE -ACTIONS */
import {Store } from '../store';
import { RecipeProps} from '../store/interfaces';
import {fetchDataAction, toggleFavAction } from '../store/action';


 /** COMPONENTS */
import Search from './Search';
import RecipesList from './RecipesList';


const Home: React.FunctionComponent<RecipeProps> = () =>  {

    /** get context from store */
    const {state, dispatch}= useContext(Store);

    /**effect hook to get data as oon as user land in the page */
    useEffect( () => {
      // if nothing in the arr then run action
      if( state.recipes.length === 0) fetchDataAction(dispatch);     
    });

   /**pass down the state with RecipeProps to component */
    const props: RecipeProps = {
      recipes: state.recipes.recipes,
      currentState:{state, dispatch},
      toggleFavAction,
      favourites : state.favourites ,
      error: state.error, 
    }

    return (
        <>
          <div className="container">
               <Search {...props}/>  
          </div>

          <main>
            <h2>recipes and guides</h2>
              <RecipesList {...props}/>
          </main>    
        </>
    )
}

export default Home;
