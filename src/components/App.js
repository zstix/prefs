import React from "react";
import Instructions from "./Instructions";
import Categories from "./Categories";

import activities from "../data/activities";
import potpourri from "../data/potpourri";
import foodAndDrink from "../data/food-and-drink";
import people from "../data/people";

const App = () => {
  const categories = [
    { name: "Activities", options: activities.slice(0, 4) },
    { name: "Potpourri", options: potpourri.slice(0, 4) },
    { name: "Food & Drink", options: foodAndDrink.slice(0, 4) },
    { name: "People", options: people.slice(0, 4) },
    { name: "One of Each", options: [] },
  ];

  return (
    <div className="wrapper">
      <Categories data={categories} />
      <Instructions />
    </div>
  );
};

export default App;
