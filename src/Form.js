import React from "react";

class Form extends React.Component {
   
   
    render() {
      return (
        <form  onSubmit={event => this.props.submitHandler(event)}>
            <input type="text" name="gifName" 
                   onChange = {event => this.props.changeHandler(event)}
                   value={this.props.formData.gifName} />
            <input type="text" name="gifUrl" 
                   onChange = {event => this.props.changeHandler(event)}
                   value={this.props.formData.gifUrl} /><br/>
            <input type="submit" />
        </form>
      )
    }
  }

export default Form; 
