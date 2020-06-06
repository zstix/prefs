import React, { useState } from "react";
import shuffle from "array-shuffle";
import Instructions from "./Instructions";
import Categories from "./Categories";

import activities from "../data/activities";
import potpourri from "../data/potpourri";
import foodAndDrink from "../data/food-and-drink";
import people from "../data/people";

const getItems = (arr) => shuffle(arr).slice(0, 4);
const getItem = (arr) => shuffle(arr).slice(-1);

const getCategories = () => [
  { name: "Activities", options: getItems(activities) },
  { name: "Potpourri", options: getItems(potpourri) },
  { name: "Food & Drink", options: getItems(foodAndDrink) },
  { name: "People (2020)", options: getItems(people) },
  {
    name: "One of Each",
    options: shuffle([
      getItem(activities),
      getItem(potpourri),
      getItem(foodAndDrink),
      getItem(people),
    ]),
  },
];

const App = () => {
  const [categories, updateCategories] = useState(getCategories());

  return (
    <div className="wrapper">
      <Categories
        data={categories}
        update={() => updateCategories(getCategories)}
      />
      <Instructions />
    </div>
  );
};

export default App;
