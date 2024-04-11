import MealsGrid from "@/components/meals/meal-grids";
import Link from "next/link";
import classes from "@/app/meals/page.module.css";
import { getMeals } from "@/libs/meals";

const Meals = async () => {
  const meals = await getMeals();
  return (
    <div>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipes and cook it yourself.It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your favorite recipes</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </div>
  );
};

export default Meals;
