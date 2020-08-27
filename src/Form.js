import React from 'react'

class Form extends React.Component {

    state = {
        gif: "",
        submittedData: []
    }

    gifChangeHandler= (event) => {
        this.setState({
            gif: event.target.value 
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let formData = {
            gif: this.state.gif
        }
        let dataArray = this.state.submittedData.concat(formData)
        this.setState({
            submittedData: dataArray 
        })
    }
    
    listOfSubmissions = () => {
        return this.state.submittedData.map(data => {
            return <div>
                <span>
                    {data.gif}
                </span>
            </div>
        })
    }
 
    render() {
        return (
            <div>
                <form onSubmit={event=>this.handleSubmit(event)} >
                    <input type="text" name="gif" value={this.state.gif} onChange={event=>this.gifChangeHandler(event)}/>
                    <input type="submit" />
                </form>
                {this.listOfSubmissions}
            </div>
        )
    }
}

export default Form 
