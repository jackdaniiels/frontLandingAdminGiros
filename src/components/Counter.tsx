import React, { useReducer } from 'react';
import * as counterActions from '../useReducer/counter-reducer/actions/actions';
import { CounterState } from '../useReducer/counter-reducer/interfaces/interfaces';
import { counterReducer } from '../useReducer/counter-reducer/state/counterReducer';


const INITIAL_STATE: CounterState = {
    counter: 0,
    changes: 0,
    previous: 0
}

export const Counter = () => {

  const [counter, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleIncrease = (value: number) => {
    dispatch(
        counterActions.doIncreaseBy(value)
    );
  }

  const handleDecrease = (value: number) => {
    dispatch(
        counterActions.doDecreaseBy(value)
    );
  }

  const hanldeReset = () => {
    dispatch(
        counterActions.doReset(0)
    );
  }

    return (
        <div>
           <pre>{ JSON.stringify(counter, null, 2)}</pre>
           <h1>{ counter.counter }</h1> 
           <h1>{ counter.changes }</h1> 
           <h1>{ counter.previous }</h1> 
           <button onClick={ () => handleIncrease(5) }>Increment 5</button>
           <button onClick={ () => handleDecrease(5) }>Decrement 5</button>
           <button onClick={ hanldeReset }>Reset</button>
        </div>
    )
}
