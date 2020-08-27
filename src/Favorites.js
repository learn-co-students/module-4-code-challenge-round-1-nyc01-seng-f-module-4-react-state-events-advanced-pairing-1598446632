import React, { Component } from "react";
import FavoriteCard from "./FavoriteCard"
import { beyArray } from "./api.js"


export default class Favorites extends Component {

    generateFavorites = () => {
        return beyArray.map(object => {
            if (object.favorite === true) {
                return <FavoriteCard key={object.id} favorite={object}/>
            }
        })
    }


    render() {
        console.log(this.props.object)
        return (
            <div className="favorites">
                <h1>Favorites</h1>
                {this.generateFavorites()}
            </div>
        )
    }
}

