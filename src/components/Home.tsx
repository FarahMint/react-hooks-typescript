/** for reference: stack overflow scroll issue 
 * https://stackoverflow.com/questions/53241783/react-refs-with-typescript-cannot-read-property-current-of-undefined
 * 
 * https://stackoverflow.com/questions/43441856/reactjs-how-to-scroll-to-an-element/51828976#51828976
 */

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


    //  create a Scroll by a component's ref
    let myRef = React.createRef<HTMLHeadingElement>();

       // General scroll to element function
    const scrollToTestTitleRef = () => {
      // case is ref is undefine
      if (!myRef.current) return;

      window.scrollTo({
        top: myRef.current.offsetTop + window.scrollY
      });
  };
  

  


    /**effect hook to get data as oon as user land in the page */
    useEffect( () => {
      // if nothing in the arr then run action
      if( state.recipes.length === 0){

        fetchDataAction(dispatch);    
      }
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
               <Search 
            // run this method to execute scrolling. 
            scrollToTestTitleRef ={scrollToTestTitleRef }
               {...props}/>  
          </div>

          <main 
          // attach the ref property to a dom element
          ref={myRef}
          >
            <h2>recipes and guides</h2>
              <RecipesList
               {...props}/>
          </main>    
        </>
    )
}

export default Home;
