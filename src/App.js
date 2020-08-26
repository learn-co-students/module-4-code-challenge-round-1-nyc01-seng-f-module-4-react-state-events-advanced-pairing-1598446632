import React from "react";
import BeyContainer from './Containers/BeyContainer'
import FavoritesContainer from './Containers/FavoritesContainer'
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <BeyContainer />
      <FavoritesContainer />
    </div>
  );
};

export default App;
