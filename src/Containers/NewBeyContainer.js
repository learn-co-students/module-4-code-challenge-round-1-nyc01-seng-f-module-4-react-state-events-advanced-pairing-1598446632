import React from "react";
import BeyCard from "../Components/BeyCard"

class NewBeyContainer extends React.Component {

    state = {
        name: "",
        img: "",
        num_of_clicks: 0
    }

    handleInPut = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.state.name !== "" && this.state.img !== "" ? this.props.addNewBeys(this.state.name, this.state.img) : window.alert("invalid entry")
        this.resetState()
    }

    resetState = () => {
        this.setState({
            name: "",
            img: ""
        })
    }

    render(){
        return(
            <div className="newForm">
                <h1>Create New Beyonce</h1>
                <form onSubmit={this.handleSubmit}>
                    Name: <input
                        id="name"
                        type="text"
                        name="name"
                        onChange={this.handleInPut}
                        value={this.state.name}
                    />
                    <br></br>
                    URL: <input
                        id="img"
                        type="text"
                        name="img"
                        onChange={this.handleInPut}
                        value={this.state.img}
                    />
                    <button type="submit">Create</button>
                </form>
                {this.state.name !== "" || this.state.img !== "" ? <BeyCard bey={this.state}/> : null}
            </div>
        )
    }
}

export default NewBeyContainer;