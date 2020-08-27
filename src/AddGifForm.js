import React from 'react';


export default class AddGifForm extends React.Component {


    state = {
        gifname: "",
        gifurl: ""
      };
    


    gifFormOnChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        }, ()=> console.log(this.state.gifname, this.state.gifurl))
      }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.gifname.length === 0 || this.state.gifurl.length === 0){
            return alert("you didn't enter a some information")
        }else {
        
        this.props.addGif(this.state)
        }
        
    }  
    
    render() {
       return (
       <form onSubmit={this.handleSubmit}>
        <div>
          <label>
           <small>Gif Name</small>
            <input id="gifname" name="gifname" type="text" onChange={event => this.gifFormOnChange(event)} value={this.state.gifname}/>
          </label>
        </div>
        <div>
          <label>
            <small>Gif Url</small>
            <input id="gifurl" name="gifurl" type="text" onChange={event => this.gifFormOnChange(event)} value={this.state.gifurl}/>
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      ) 
    }


}