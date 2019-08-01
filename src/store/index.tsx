import React , { useReducer} from 'react';
import {IState,IAction } from './interfaces';

 
const initialState:IState={
    recipes: [],
    favourites:[],
    recipe:{},
    error:{}
 };
 

export const Store = React.createContext<IState | any>(initialState);


function reducer(state:IState, action:IAction):IState{
    switch(action.type){
        case'FETCH_DATA':
        return{...state, recipes: action.payload} // get the current state & put all recipes in there
        case'FETCH_ONE':
        return{...state, recipe: action.payload} // get the current state & put 1 recipe in there
        case'SEARCH':
        return{...state, recipes: action.payload} 
        
        case 'ADD_FAV':
       return { ...state, favourites:[...state.favourites, action.payload]} // what is currently in the state, and amend the fav arr
        case 'REMOVE_FAV':
       return { ...state, favourites:action.payload}
        // what is currently in the state, and replace fav arr with what is passed in payload
        case 'ERROR_SEARCH':
       return { ...state, error :action.payload}

        default:
        return state;
    }
};

 
export function StoreProvider({children}:JSX.ElementChildrenAttribute):JSX.Element{
    const [state, dispatch]= useReducer(reducer, initialState);
    /**parse state & dispatch into our value so compo has access to them */
   

    return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}