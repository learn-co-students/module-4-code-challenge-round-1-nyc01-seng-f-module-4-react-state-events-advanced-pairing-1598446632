import React from "react"

class Form extends React.Component{


    constructor(){
        super()
        this.state = {
            gif: "",
            name: "",
            search: ""
        }
    }

    
        changeHandler = (event) =>{
            event.persist()
             this.setState({
                [event.target.name]:  event.target.value
            })
            
        }

        submitHandler = (event) => {
            event.preventDefault()
            let newBey = {
                "id": this.state.name,
                "name": this.state.name,
                "img": this.state.gif,
                "favorite": false,
                "num_of_clicks": 0
              }
              this.props.add(newBey)
              this.setState({
                gif: "",
                name: "",
                search: ""
            })

        }

// my thought here was to press submit on the search bar and have it display a card at teh bottom in this section. if it did, I could import beyCard or something and have it display in that section
// if not. i'll just have to pass a callback function from app, and have it change the state of sorted Beyonces to just the one card searched (filter bey.name === beyObj.name)
// if i do above, i might be able to get away with saving te previous option as a variable that can be "reset" back once they press a certain button. but who knows
        searchHandler = (event) =>{
            event.preventDefault()
            return <h1>Luis</h1>
        }


    render(){
        return(
            <div className= "index">
                <form onSubmit ={this.submitHandler}>
                    <h1>Form</h1>
                    <p> Enter your Name Link</p>
                    <input name = "name" type="text" onChange = {this.changeHandler} value={this.state.name} />
                    <p> Enter your Gif Link</p>
                    <input name = "gif" type="text" onChange = {this.changeHandler} value={this.state.gif} />
                    <input type="submit" /> 
                </form>
                <div>
                    <h1> SEARCH</h1>
                    <p>Search By Name</p>
                    <form onSubmit ={this.searchHandler}>
                    <input name = "search" type="text" onChange = {this.changeHandler} value={this.state.search} />
                    <input type="submit" value = "search" /> 
                    </form>
                </div>





            </div>
            

        )
    }


}





export default Form