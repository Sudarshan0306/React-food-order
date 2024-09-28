import useHttp from "../hooks/useHttp";
import Error from "./Error";

import MealItem from "./MealItem";

const requestConfig = {};

const Meals = () => {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching Meals...</p>;
  }

  if(error) {
    return <Error title='Failed to load Meals' message={error} />
  }

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem meal={meal} key={meal.id} />
      ))}
    </ul>
  );
};

export default Meals;
