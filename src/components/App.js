import React from "react";
import shuffle from "array-shuffle";
import Instructions from "./Instructions";
import Categories from "./Categories";

import activities from "../data/activities";
import potpourri from "../data/potpourri";
import foodAndDrink from "../data/food-and-drink";
import people from "../data/people";

const App = () => {
  const categories = [
    { name: "Activities", options: shuffle(activities).slice(0, 4) },
    { name: "Potpourri", options: shuffle(potpourri).slice(0, 4) },
    { name: "Food & Drink", options: shuffle(foodAndDrink).slice(0, 4) },
    { name: "People", options: shuffle(people).slice(0, 4) },
    {
      name: "One of Each",
      options: shuffle([
        shuffle(activities).slice(-1),
        shuffle(potpourri).slice(-1),
        shuffle(foodAndDrink).slice(-1),
        shuffle(people).slice(-1),
      ]),
    },
  ];

  return (
    <div className="wrapper">
      <Categories data={categories} />
      <Instructions />
    </div>
  );
};

export default App;
