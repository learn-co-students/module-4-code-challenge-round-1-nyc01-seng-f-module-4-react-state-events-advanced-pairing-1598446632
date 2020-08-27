import React, { Component } from 'react';

class Form extends Component {

    state = {

        name: '',
        img: ''
    }

    handleTitle=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        }, console.log(e.target.value))
    }
    
      handleImg=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        }, console.log(e.target.value))
    }

    submitHandler=(e)=>{
        e.preventDefault()
        if (!this.state.name || !this.state.img) return
       
        this.props.handleFormData(this.state)
    }


    render() {
        return (
            <form 
            onSubmit={this.submitHandler}
            >
                <input 
                    type="text" 
                    name='name' 
                    placeholder="name" 
                    // value={this.state.title}
                    onChange={this.handleTitle}
                    >
                    
                </input>

                <input 
                    type="text" 
                    name='img' 
                    placeholder="img url" 
                    // value={this.state.img}
                    onChange={this.handleImg}
                    >

                </input>

                <input type="submit"></input>

            </form>
        )
    }
}

export default Form