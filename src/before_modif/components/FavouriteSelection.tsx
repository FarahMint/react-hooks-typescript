import React, { useContext } from 'react';
// import {Link} from "react-router-dom";
 import RecipesList from './RecipesList';

import {Store } from '../Store';
import { RecipeProps} from '../interfaces';
import { toggleFavAction } from '../action';


export default function FavouriteSelection():JSX.Element {
    const {state, dispatch}= useContext(Store);
    console.log(state.favourites)

    const props:RecipeProps ={
        recipes: state.favourites,
        currentState:{state, dispatch}, 
        toggleFavAction,
       favourites: state.favourites,
    }
    return (
        <>
            <RecipesList {...props}/>
        </>
    )
}
