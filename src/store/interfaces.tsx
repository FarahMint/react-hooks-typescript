/**
|--------------------------------------------------
| all interfaces
|--------------------------------------------------
*/

import { RouteComponentProps} from "react-router-dom";

export type Dispatch = React.Dispatch<IAction>;

export interface IState{
    recipes: Array<IRecipesAPI>,
    favourites:Array<IRecipesAPI>,
    recipe:Object,
    error?: any
} 

export interface IAction{
    type: string,
   // payload:any, // for now can be anything 
    payload:Array<IRecipesAPI> | any,
    error?: any
} 
 
export interface IRecipesAPI{
    image_url: string,
    publisher: string,
    publisher_url:string,
    recipe_id: string,
    social_rank: number
    source_url: string,
    title: string,
  }

  export  interface RecipeProps {
    recipes: IRecipesAPI[],
    currentState:{state:IState , dispatch: Dispatch}
 toggleFavAction: (state: IState, dispatch: Dispatch, recipe: IRecipesAPI)=>IAction,
 favourites :any,
 error?: any
}

 export interface IDetailsRecipe extends  RouteComponentProps <{id:string}>{}