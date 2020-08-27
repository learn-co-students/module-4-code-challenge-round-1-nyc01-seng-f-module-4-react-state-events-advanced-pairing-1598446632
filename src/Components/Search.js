import React from 'react'

function Search(props){

return  <input placeholder="search by name" value={props.searchValue} onChange={props.searchHandler}/>

}

export default Search



