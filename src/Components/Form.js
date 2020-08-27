import React from 'react'

class Form extends React.Component{

    state={
        name:"",
        img:"",
        favorite:false,
        num_of_clicks:0
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return(
            <form onSubmit={(e)=>{
              
                e.preventDefault()
                this.props.submitHandler(this.state)
                this.setState({name:"", img:"", ...this.state})
            }}>
                <input type="text" name="name" placeholder="enter bey text" value={this.state.name} onChange={this.changeHandler}/> 
                <input type="text" name="img" placeholder="enter bey gif link" value={this.state.img} onChange={this.changeHandler}/> 
                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default Form