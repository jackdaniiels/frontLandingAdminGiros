export type CounterAction = 
| { type: 'increaseBy', payload: { value: number } } 
| { type: 'decreaseBy', payload: { value: number } }
| { type: 'reset', payload: { value: number } };

export const doReset = (value: number = 0): CounterAction => (
    { type: 'reset', payload: { value } }
);

export const doIncreaseBy = (value: number = 0): CounterAction => (
    { type: 'increaseBy', payload: { value } }
);

export const doDecreaseBy = (value: number = 0): CounterAction => (
    { type: 'decreaseBy', payload: { value } }
);