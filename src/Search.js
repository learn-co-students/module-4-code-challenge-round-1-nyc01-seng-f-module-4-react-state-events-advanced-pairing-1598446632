import React from "react";

function Search(props){

return(
    <form>
        <h2>Search for gif by name</h2>
        <input type="text" placeholder="search for name" value={props.searchValue} onChange={props.changeHandler} />
    </form>
)

}



export default Search
