import React from 'react';
// import { RouteComponentProps } from "react-router-dom";

import {FaRegHeart } from 'react-icons/fa';
 
import {IRecipesAPI, RecipeProps} from '../interfaces';

import { Link} from "react-router-dom";
 
// interface IListPages extends RouteComponentProps<{id:string}> {}

const  RecipesList: React.FunctionComponent<RecipeProps> = (props) =>  {
    
const{state, dispatch} = props.currentState;
 
// const formatTitle =(title: string)=>{
//      let tempTitle = title.length < 17 ? title : `${title.substring(0,17)}...`;
//      return tempTitle;
//  }
   
    return(
        <section className='recipes__layout'>
  
            { props.recipes && props.recipes.map((recipe:IRecipesAPI)=> {
                return(
                     <div className='recipe__box' key={recipe.recipe_id}>
                         <Link to={`/recipes/${recipe.recipe_id}`}>
                       
                        <div className="img-container">
                            <img src={recipe.image_url} alt={recipe.title} title={recipe.title}/>
                        </div>
                        </Link>
                        <div className="info"> 
                            <h3> {recipe.title}</h3>
                            <div className="cta"> 
                            <span>by {recipe.publisher}</span>
                             
                            <button 
                              type='button'
                              className="fav__btn"
                               onClick={()=> props.toggleFavAction(state, dispatch, recipe)}>
                                   
                            {props.favourites && props.favourites.find((fav:IRecipesAPI) => fav.recipe_id === recipe.recipe_id) ?
                             (<FaRegHeart className="fav__btn-icon active" title="remove from favorite"/>) :
                             (<FaRegHeart className="fav__btn-icon" title="add to favourite"/>) }
                            
                            </button>
                        </div>
                        </div>
                 
                    </div>
                    )
                })}
            </section>
        )
        
       
    }
        


export default RecipesList;
