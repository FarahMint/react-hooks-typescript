import React, { useContext, useEffect } from 'react';

 import {Store } from '../Store';
 import { IDetailsRecipe } from '../interfaces';

 import { fetchOneAction } from '../action';

// export default function Recipe(props:any) {
const  Recipe: React.FunctionComponent< IDetailsRecipe> = (props) =>{
 const {state, dispatch}= useContext(Store);
 const id = props.match.params.id;

    //   /**effect hook to get data as oon as user land in the page */
        useEffect( () => {   
            // if nothing in the arr then run action
            fetchOneAction(id, dispatch);     
        } ,[id, dispatch]);

//    //create action
//    const fetchOneAction = async()=>{
//     const REACT_APP_API_KEY= "ea7b53ad855f47c6b3fbb3ab91fa4089";
//     const id = props.match.params.id;
//     // console.log("id",id);
//     // const URL = `https://www.food2fork.com/api/search?key=${REACT_APP_API_KEY}`;
//     try{
//       //1 fetch data
//       const data = await fetch(`https://www.food2fork.com/api/get?key=${REACT_APP_API_KEY}&rId=${id}`);
//       //2 once we have data convert to json   
//       const dataJSON= await data.json();
     
    
//       // 3 return dispatch - so we can send our data to our action
//       //which then sentd to our reducer - which then update our store
//       return dispatch({ type:'FETCH_ONE', payload: dataJSON })
//     }catch(err){
//     console.log(err);
//     } 
//   }

    return (
        <React.Fragment>
      
 {state.recipe.recipe && (
        <section className="single-recipe">
                <h2>{state.recipe.recipe.title}</h2>
            <div className="single-recipe-info">
              
            <div className="img-container">
                <img
                   src={state.recipe.recipe.image_url}
                   alt={state.recipe.recipe.title}
                 />
                 <p>
                   <a
                     className="info"
                     href={state.recipe.recipe.publisher_url}
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     Published by :{state.recipe.recipe.publisher}
                   </a>
                 </p>
               </div>

               <div className="single-room-info">
               <article className="desc">
               <p>{state.recipe.recipe.ingredients}</p>
               <a
                 href={state.recipe.recipe.source_url}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="btn btn-link-publisher">
                 publisher website
               </a>
               </article>
             </div>
            </div>
        </section>  )}
      </React.Fragment>
    )
}

export default  Recipe;