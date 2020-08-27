import React from "react";

class BeyForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            img: ""
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    resetState = () => {
        this.setState({
            name: "",
            img: ""
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let formData = {
            name: this.state.name,
            img: this.state.img
          }
          this.props.createBey(formData)
          this.resetState()
      }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <label>
                Name
                <input 
                    id="name"
                    type="text" 
                    name="name"
                    value={this.state.name}
                    onChange={event => this.changeHandler(event)}
                />
                </label><br/>
                <label>
                Image URL
                <input 
                    id="img"
                    type="text" 
                    name="img"
                    value={this.state.img}
                    onChange={event => this.changeHandler(event)}
                />
                <button type="submit">Create Bey</button>
                </label>
            </form>
        )
    }
}

export default BeyForm