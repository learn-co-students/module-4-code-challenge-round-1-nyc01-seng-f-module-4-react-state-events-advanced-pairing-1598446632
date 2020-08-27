import React from "react";
import "./App.css";
import BeyContainer from "./BeyContainer";
import Favorites from "./Favorites";

class App extends React.Component {

    state = { beyObject: [] }

    favClickHandler = (object) => {
        object.favorite = !object.favorite
        if (!object.favorite) {
            alert("I got a hot sauce in my bag, swag")
        }

        let beyoncesArray = this.state.beyObject
        beyoncesArray.push(object)

        this.setState({
            beyObject: beyoncesArray.filter(item => item.favorite)
        }, () => console.log(`state: `, this.state.beyObject))
    }

    render() {
        return (
            <div className="container">
                <BeyContainer favClick={this.favClickHandler}/>
                <Favorites />
            </div>
        );
    }

};

export default App;
