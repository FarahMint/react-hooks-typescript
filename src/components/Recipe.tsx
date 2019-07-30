import React, { useContext, useEffect } from 'react';

 import {Store } from '../store';
 import { IDetailsRecipe } from '../store/interfaces';

 import { fetchOneAction } from '../store/action';

 
const  Recipe: React.FunctionComponent< IDetailsRecipe> = (props) =>{
 const {state, dispatch}= useContext(Store);
 const id = props.match.params.id;

    //   /**effect hook to get data as oon as user land in the page */
        useEffect( () => {   
            fetchOneAction(id, dispatch);     
        } ,[id, dispatch]);
 
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