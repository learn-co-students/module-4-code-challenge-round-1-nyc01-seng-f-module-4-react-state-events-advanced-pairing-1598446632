import React from "react";

class SearchForm extends React.Component {

    render(){
        return (
            <form>
                <input 
                    placeholder="Search for your bey!"
                    name="search"
                    value={this.props.searchTerm}
                    onChange={this.props.searchHandler} 
                />
            </form>
        )
    }
}

export default SearchForm