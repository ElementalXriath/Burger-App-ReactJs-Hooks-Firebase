import React, { Component } from 'react';
import './Burgeringredients.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {

    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
             ingredient = <div className="BreadBottom"></div>;
            break;
            case ('bread-top'):
             ingredient = (
                 <div className="BreadTop">
                     <div className="SeedsOne"></div>
                     <div className="SeedsTwo"></div>
                 </div>
             );
            break;
            case ('meat'):
                 ingredient = <div className="Meat"></div>;
            break;
            case ('cheese'):
                 ingredient = <div className="Cheese"></div>;
            break;
            case ('salad'):
                 ingredient = <div className="Salad"></div>;
            break;
            case ('bacon'):
                 ingredient = <div className="Bacon"></div>;
            break;
            default: 
            ingredient = null
        }
    
        return ingredient;
    }
   

}

BurgerIngredient.protoTypes = {
    type : PropTypes.string.isRequired
};

export default BurgerIngredient;