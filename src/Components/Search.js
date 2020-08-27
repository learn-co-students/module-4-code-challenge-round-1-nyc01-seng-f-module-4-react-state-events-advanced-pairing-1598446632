import React from 'react'

function Search(props){

return (
    <form>
        <input placeholder="search by name" value={props.searchValue} onChange={props.searchHandler}/>
    </form>
    )
}

export default Search



