import React from 'react'

class Form extends React.Component {

    state = {
        name: "",
        img: "",
        favorite: false,
        num_of_clicks: 0
        
    }

    changeHandler = (e) => {
        //e.target.name becomes the key name of the target the event is submitting
        this.setState({ [e.target.name]: e.target.value })
    }
    


    render() {

        return(
            
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(e.target)

                this.props.submitHandler( {img: e.target[0].value, name: e.target[1].value} )

            }}>

            <input type="text" name="gif" placeholder="enter gif url here" onChange={this.changeHandler}/>
            <input type="text" name="name" placeholder="enter name" onChange={this.changeHandler}/>
            <input type="submit" value="submit gif"/>
            </form>
            

        )
    }
}

export default Form