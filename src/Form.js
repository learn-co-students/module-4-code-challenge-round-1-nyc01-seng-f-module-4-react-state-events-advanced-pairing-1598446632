import React from 'react'

class Form extends React.Component{

state = { 
    name:"",
    img: "",
    favorite: false,
    num_of_clicks: 0
}
//hold state in form. app doesn't need to know every single change before submitted.

changeHandler = (e) => {
    console.log("changehandler", e.target)
    this.setState({ [e.target.name]: e.target.value })
}

submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({name:"", img:""})
}

render(){
    // console.log("this.state", this.state.img)
    return (
        <form onSubmit={this.submitHandler}>
            <h2>enter gif</h2>
         <input type="text" name="name" placeholder="enter name" value={this.state.name} onChange={this.changeHandler}/>
         <input type="text" name="img" placeholder="enter img" value={this.state.img} onChange={this.changeHandler}/>
         <input type="submit" value="submit gif" />
        </form>
    )
 }

}

export default Form