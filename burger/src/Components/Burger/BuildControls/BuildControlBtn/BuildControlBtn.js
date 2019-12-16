import React from 'react';
import './BuildControlBtn.css';

const buildControlBtn = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button onClick={props.remove}>Less</button>
        <button onClick={props.added}>More</button>
    </div>
);

export default buildControlBtn;