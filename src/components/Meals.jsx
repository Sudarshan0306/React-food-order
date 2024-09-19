import React, { useEffect, useState } from "react";
import  MealItem  from "./MealItem";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
      }

      const data = await response.json();
      setMeals(data);
    };

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem meal={meal} key={meal.id}/>
      ))}
    </ul>
  );
};

export default Meals;
