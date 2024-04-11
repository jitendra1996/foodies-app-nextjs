import MealItem from "./meal-items";
import classes from "@/components/meals/meals-grid.module.css";

const MealsGrid = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>{<MealItem {...meal} />}</li>
      ))}
    </ul>
  );
};

export default MealsGrid;
