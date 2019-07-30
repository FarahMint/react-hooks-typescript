import React, {useState, useContext} from 'react';

import { searchRecipes} from '../action';

import {FaSearch } from 'react-icons/fa';

import {Store } from '../Store';

    const Search: React.FunctionComponent<any> = (props) =>  {
      const { dispatch}= useContext(Store);


      const [input, setInput] = useState("");
      const 
         handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
           e.preventDefault();
           console.log(input);
           searchRecipes(input, dispatch);
         };
 

    return (
        <div className="form-container">
        <form className="form-group" 
        onSubmit={handleSubmit}
         >
         
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