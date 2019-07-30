import React, { useContext, useEffect } from 'react';
 

import {Store } from '../Store';
import { RecipeProps} from '../interfaces';
import {fetchDataAction, toggleFavAction } from '../action';


import Search from './Search';
import RecipesList from './RecipesList';

import showcase from "../showcase.jpeg";


const Home: React.FunctionComponent<RecipeProps> = () =>  {


  const {state, dispatch}= useContext(Store);

  /**effect hook to get data as oon as user land in the page */
useEffect( () => {
  // if nothing in the arr then run action
  if( state.recipes.length === 0) fetchDataAction(dispatch);     
});


const props: RecipeProps = {
  recipes: state.recipes.recipes,
  currentState:{state, dispatch},
  toggleFavAction,
  favourites : state.favourites ,
  error: state.error,
 
}


// const position = () => {
//   const recipeList = document.querySelector("#recipes-list");

//   const offsetTop = recipeList.offsetTop;
//   window.scrollTo(0, offsetTop + 500);
// };


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

    return (
        <>

<div className="container">
           
            <div
              style={divStyle}
            >
               <Search
                  {...props}
                // position ={this.position}
                />  
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
