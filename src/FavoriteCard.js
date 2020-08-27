import React from "react";

class FavoriteCard extends React.Component {

    render() {
        console.log("this is a fav card")
        return (
            <div>
                <h3>{this.props.favorite.name}</h3>
                <img src={this.props.favorite.img} />
            </div>
        );
    }
};

export default FavoriteCard;
