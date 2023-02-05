import classes from './AvailableMeal.module.css'
import Card from '../UI/Card';
import MealItem from './Mealitem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Paneer',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Veg Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Chicken ',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
  
const AvailableMeal = ()=>{
    const mealItem =  DUMMY_MEALS.map(meal=><MealItem name = {meal.name} description = {meal.description} price = {meal.price}/>)
    return(
        <section className={classes.meals}>
            <Card >
                <ul>
                    {mealItem}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeal