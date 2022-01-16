
import { CounterAction } from "../actions/actions";
import { CounterState }  from "../interfaces/interfaces";

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

    const { counter, changes } = state;
    const { type, payload } = action;

    switch (type) {
        case 'increaseBy':
            return { 
                counter: counter + payload.value,
                changes: changes + 1,
                previous: counter
            };
        case 'decreaseBy':
            return { 
                counter: counter - payload.value,
                changes: changes + 1,
                previous: counter
             };
        case 'reset':
            return { 
                counter: payload.value,
                changes: payload.value,
                previous: payload.value
            };
        default:
            return state;
    }
}