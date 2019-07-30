import React, {useState, useContext} from 'react';
/**ACTION */
import { searchRecipes} from '../action';
/**ICON */
import {FaSearch } from 'react-icons/fa';
/**STORE */
import {Store } from '../Store';

  const Search: React.FunctionComponent<any> = (props) =>  {
      /**get context from store */
      const { dispatch}= useContext(Store);
      /**state hook for the form */
      const [input, setInput] = useState("");

      /** when user submit the form*/
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
           e.preventDefault();
           searchRecipes(input, dispatch);
           /**clear input field after user search */
           setInput("");
         };
 

    return (
      <div className="form-container">
        <form className="form-group" 
        onSubmit={handleSubmit} >
         
          <label htmlFor="search" hidden>Search</label>
          <input
            name="search"
            value={input}
           onChange={(e)=>   setInput(e.target.value)}
            placeholder="input ingredients to find recipe...."
            className="form-control"
          />

          <button className="search__btn" type="submit">
           <FaSearch  className="icon-search"/>
          </button>

        </form>
          {props.error && <p className="error">{props.error}</p> }
      </div>
    )
}

export default  Search;