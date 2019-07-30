import {IRecipesAPI, IAction,IState, Dispatch } from './interfaces';
 
 
 //create action
 export  const fetchDataAction = async(dispatch:Dispatch )=>{
    // const REACT_APP_API_KEY= "f97a33d2078479b478ea3e4a82adaaae";
    // const URL = `https://www.food2fork.com/api/search?key=${REACT_APP_API_KEY}`;
    try{
      //1 fetch data
      const data = await fetch('../data.json');
      //2 once we have data convert to json   
      // const dataJSON= await data.json();
      const dataJSON= await data.json();
    
      // 3 return dispatch - so we can send our data to our action
      //which then sentd to our reducer - which then update our store
      return dispatch({
        // name of our action
        type:'FETCH_DATA',
        //data we get from the fetch
        // payload: dataJSON
        payload: dataJSON
      })

    }catch(err){
      console.log(err);
    }
     
  }

  export const fetchOneAction = async(id:string, dispatch:Dispatch)=>{
   const REACT_APP_API_KEY= "ea7b53ad855f47c6b3fbb3ab91fa4089";
//    const id = props.match.params.id;
   // console.log("id",id);
   // const URL = `https://www.food2fork.com/api/search?key=${REACT_APP_API_KEY}`;
   try{
     //1 fetch data
     const data = await fetch(`https://www.food2fork.com/api/get?key=${REACT_APP_API_KEY}&rId=${id}`);
     //2 once we have data convert to json   
     const dataJSON= await data.json();
    
   
     // 3 return dispatch - so we can send our data to our action
     //which then sentd to our reducer - which then update our store
     return dispatch({ type:'FETCH_ONE', payload: dataJSON })
   }catch(err){
   console.log(err);
   } 
 }

  export const searchRecipes = async( search:string ,dispatch:Dispatch)=>{
   const REACT_APP_API_KEY= "ea7b53ad855f47c6b3fbb3ab91fa4089";
//    const id = props.match.params.id;
   // console.log("id",id);
   // const URL = `https://www.food2fork.com/api/search?key=${REACT_APP_API_KEY}`;
   try{
     //1 fetch data
     const data = await fetch(`https://www.food2fork.com/api/search?key=${REACT_APP_API_KEY}&q=${search}`);
     //2 once we have data convert to json   
     const dataJSON= await data.json();
    if(dataJSON.count === 0 || dataJSON.recipes.length === 0){
       /** when user perform a search filter list and find the corresponding marker on the map */
       let msg = `sorry no accurate result was found`;

       return dispatch({ type:'ERROR_SEARCH', payload: msg });
    }
   
     // 3 return dispatch - so we can send our data to our action
     //which then sentd to our reducer - which then update our store
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

    //dispatch whatever object it is
 return dispatch(defaultDispatchObj);
 }
