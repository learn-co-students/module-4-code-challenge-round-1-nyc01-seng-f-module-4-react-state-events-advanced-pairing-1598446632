import React from 'react'

function Search(props) {
    return <input type="text" value={props.value} onChange={props.changeHandler} />
}


export default Search 