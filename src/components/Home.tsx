import React, { useContext, useEffect } from 'react';
 

 /** STORE  -INTERFACE -ACTIONS */
import {Store } from '../Store';
import { RecipeProps} from '../interfaces';
import {fetchDataAction, toggleFavAction } from '../action';


 /** COMPONENTS */
import Search from './Search';
import RecipesList from './RecipesList';
import showcase from "../showcase.jpeg";


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


  /** style for showcase bcg */
    const divStyle = {
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        height: "90vh",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" +
          showcase +
          ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      };
      /**  end style for showcase bcg */

    return (
        <>
          <div className="container">
           
            <div style={divStyle}>
               <Search
                  {...props}/>  
            </div>  
          </div>

          <main>
            <h2>recipes and guides</h2>
              <RecipesList {...props}/>
          </main>    
        </>
    )
}

export default Home;
