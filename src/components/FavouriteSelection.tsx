import React, { useContext } from 'react';

/**COMPONENT */
import RecipesList from './RecipesList';

 /** STORE  -INTERFACE -ACTIONS */
import {Store } from '../Store';
import { RecipeProps} from '../interfaces';
import { toggleFavAction } from '../action';


export default function FavouriteSelection():JSX.Element {
    /**get context */
    const {state, dispatch}= useContext(Store);

    /**pass down the state with RecipeProps type to component */
    const props:RecipeProps ={
        recipes: state.favourites,
        currentState:{state, dispatch}, 
        toggleFavAction,
       favourites: state.favourites,
    }

    return ( <RecipesList {...props}/> )
}
