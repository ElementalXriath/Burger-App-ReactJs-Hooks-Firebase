import React, { Component } from 'react';
import Aux from '../../high-order-comp/Auxi';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat : 1.2,
    bacon: 0.4
}

class BurgerBuilder extends Component {

    state ={
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        })

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if (oldCount <= 0){
            return;
        }
        
        const updatedCount = oldCount - 1 ;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceSub = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSub;
        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        })

    }

    render () {
        console.log(this.state.ingredients)
        return (
            <Aux>

                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>
                    <BuildControls 
                        price={this.state.totalPrice}
                        added={this.addIngredientHandler}
                        remove={this.removeIngredientHandler}
                    />
                </div>

            </Aux>
        );
    }
}

export default BurgerBuilder;