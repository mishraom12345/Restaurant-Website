import { Fragment } from "react"
import mealsimage from '../../asset/meals.jpg.png'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"

const Header = props=>{
    return(
        <Fragment  >
            <header className = {classes.header}>

                <h1>Indian  Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src = {mealsimage} alt = 'a table full of indian food ' />
            </div>
        </Fragment>
    )
}

export default Header