import {IRecipesAPI, IAction,IState, Dispatch } from '../store/interfaces';
 
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY

 
 export  const fetchDataAction = async(dispatch:Dispatch )=>{
    try{
      //1 fetch data
      // const URL = `https://www.food2fork.com/api/search?key=${REACT_APP_API_KEY}`;
      const data = await fetch("./data.json");
      //2 once we have data convert to json   
      const dataJSON= await data.json();
    
      // 3 dispatch - send data to action then send to reducer - which then update store
      return dispatch({
        // action name
        type:'FETCH_DATA',
        //data we get from the fetch
        payload: dataJSON
      })

    }catch(err){
      console.log(err);
    }
     
  }


  export const fetchOneAction = async(id:string, dispatch:Dispatch)=>{
 
   try{
     //1 fetch data
     const data = await fetch(`https://www.food2fork.com/api/get?key=${REACT_APP_API_KEY}&rId=${id}`);
     //2 once we get data convert to json   
     const dataJSON= await data.json();
    
   
     // 3 dispatch - send data to action which then sentd to reducer - which then updatestore
     return dispatch({ type:'FETCH_ONE', payload: dataJSON })
   }catch(err){
   console.log(err);
   } 
 }

  export const searchRecipes = async( search:string ,dispatch:Dispatch)=>{

   try{
     //1 fetch data
     const data = await fetch(`https://www.food2fork.com/api/search?key=${REACT_APP_API_KEY}&q=${search}`);
     //2 once we have data convert to json   
     const dataJSON= await data.json();
    
    //  if no result found show message
     if(dataJSON.recipes.length === 0) {
       dispatch({ type:'ERROR_SEARCH',
        payload: {msg:"sorry there is no result",show:true }});
       setTimeout(() => { 
         dispatch({ type:'ERROR_SEARCH', payload: {msg:"",show:false }});
       }, 3000);
     }
   
     
 
     // or dispatch - send data to action which then send to reducer - which then update store
     return dispatch({ type:'SEARCH', payload: dataJSON })
   }catch(err){
   console.log(err);
   } 
 }


  export const toggleFavAction =(state:IState, dispatch:any, recipe:IRecipesAPI | any):IAction => {
  // 1- check if recipe is in our fav arr
  const recipeInFav=  state.favourites.includes(recipe);
    
  let defaultDispatchObj={
    type:'ADD_FAV',
    payload: recipe
  }
    // if recipe attribute exist inside fav arr
    if(recipeInFav){
      // take recipe out of fav array
      const recipeRemovedOutFav = 
      state.favourites.filter((fav:IRecipesAPI) => fav.recipe_id !== recipe.recipe_id) 
      // give new array to payload
      // change dispatch object to have a different action
      defaultDispatchObj={
        type:'REMOVE_FAV',
        payload: recipeRemovedOutFav
      }
    }

 return dispatch(defaultDispatchObj);
 }
