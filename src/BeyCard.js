import React from "react";

class BeyCard extends React.Component {

    favoriteClickHandler = () => {
        return this.props.favClickHandler(this.props.beyItems)
    }

    render(props) {
        return (
            <div>
                <h3>{this.props.beyItems.name}</h3>
                <img onClick={this.favoriteClickHandler} src={this.props.beyItems.img} />
            </div>
        );
    }
};

export default BeyCard;
