import React from 'react'

class Form extends React.Component{
    
    state = {
        name: "",
        img: ""
    }

    submitHelper = (e) => {
        this.props.submitHandler(e)
        this.setState({name: "", img: ""})

    }

    changeHelper = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <>
                <form onSubmit={this.submitHelper}>
                    <input type="text" name="name" placeholder="Enter name here" onChange={this.changeHelper} value={this.state.name}/>
                    <br />
                    <input type="text" name="img" placeholder="Enter gif link here" onChange={this.changeHelper} value={this.state.img}/>
                    <input type="submit" value="Create Bey"/>
                </form>
            </>
        )
    }

}

export default Form