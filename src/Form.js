import React from 'react'

class Form extends React.Component{

state = { 
    img: ""
}


changeHandler = (e) => {
    console.log("changehandler", e.target)
    this.setState({ [e.target.name]: e.target.value })
}

render(){
    console.log("this.state", this.state.img)
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log(e.target[0].value) //returns the input value for the first field
            this.props.submitHandler({img: e.target[0].value})
        }
        
        }>
            <h2>enter gif</h2>
         <input type="text" name="img" placeholder="enter img" value={this.state.img} onChange={this.changeHandler}/>
         <input type="submit" value="submit gif" />
        </form>
    )
}



}

export default Form