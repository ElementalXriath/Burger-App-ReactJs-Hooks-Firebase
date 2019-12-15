import React, { Component } from 'react';
import Aux from '../../high-order-comp/Auxi';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component {

    state ={
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render () {
        return (
            <Aux>

                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>
                    Build Controller
                </div>

            </Aux>
        );
    }
}

export default BurgerBuilder;