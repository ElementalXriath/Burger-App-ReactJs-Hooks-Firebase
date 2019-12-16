import React from 'react';
import './BuildControls.css';
import BuildControlBtn from '../BuildControls/BuildControlBtn/BuildControlBtn';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (

    <div>
        <p>Current Price is {props.price}</p>
        {
            controls.map(ctrl => (
                <BuildControlBtn added={() => props.added(ctrl.type)} remove={() => props.remove(ctrl.type)} key={ctrl.label} label={ctrl.label} />
            ))
        }
    </div>
);

export default buildControls;