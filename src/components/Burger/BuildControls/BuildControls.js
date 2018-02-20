import React from 'react';

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad: $1 ', type: 'salad'},
  {label: 'Cheese: $0.75', type: 'cheese'},
  {label: 'Meat: $2.5', type: 'meat'},
  {label: 'Bacon: $2', type: 'bacon'}
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(ctrl => (
        <BuildControl 
          key={ctrl.label} 
          label={ctrl.label} 
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]} />
      ))}
      <button 
        className={classes.OrderButton}
        disabled={!props.purchaseable}>ORDER NOW</button>
    </div>
  );
}

export default buildControls;