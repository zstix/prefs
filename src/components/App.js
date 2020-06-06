import React from "react";
import Instructions from "./Instructions";

import activities from "../data/activities";
import potpourri from "../data/potpourri";
import foodAndDrink from "../data/food-and-drink";
import people from "../data/people";

const App = () => {
  const categories = [
    { name: "Activities", options: activities },
    { name: "Potpourri", options: potpourri },
    { name: "Food & Drink", options: foodAndDrink },
    { name: "People", options: people },
    { name: "One of Each", options: [] },
  ];

  return (
    <div className="wrapper">
      <div className="categories">categories go here</div>
      <Instructions />
    </div>
  );
};

export default App;
