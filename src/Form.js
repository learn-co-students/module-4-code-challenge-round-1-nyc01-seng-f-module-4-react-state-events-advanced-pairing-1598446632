import React from 'react'

function Form(props) {
    
    return (
			<form onSubmit={ e => {
                e.preventDefault()
                props.submitHandler({id:10, name: e.target[0].value, img: e.target[1].value, favorite: false, num_of_clicks: 0})
			}}>
                <input type="text" placeholder="enter name here" />
				<input type="text" placeholder="enter gif url here" />
				<input type="submit" value="add gif"/>
			</form>
            )
}

export default Form