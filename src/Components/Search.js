import React from 'react'

function Search(props) {
    return (
        <div className="searchForm">
            <form>
                <h1>Search You Bey</h1>
                <input placeholder="search your Bey" value={props.searchValue} onChange={props.searchHandler} />
            </form>
        </div>
    )
}

export default Search;