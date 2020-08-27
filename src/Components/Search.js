import React from 'react'


class Search extends React.Component{
    render() {
        return(
            <form>
                <input placeholder="Search for Beys Here!" onChange={this.props.searchHelper} value={this.props.searchValue} />
            </form>
            
        )

    }

}


export default Search