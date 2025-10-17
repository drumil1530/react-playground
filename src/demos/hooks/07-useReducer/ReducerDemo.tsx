/*
 * Step 1: Initialize useReducer
 * - Create a reducer that manages a simple count value.
 * - Actions: increment, decrement, reset.
 * - Observe how dispatch replaces multiple setState calls.
 */

import { useReducer } from 'react';
import Button from '../../../components/Button';

type Action = 'increment' | 'decrement' | 'reset';

function reducer(state: { count: number }, action: { type: Action }) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

export default function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className='p-2'>
      <p className='text-3xl mb-1'>Count: {state.count}</p>
      <Button className="me-1" onClick={() => dispatch({ type: 'increment' })}>
        +
      </Button>
      <Button variant="danger" onClick={() => dispatch({ type: 'decrement' })}>
        -
      </Button>
      <Button
        variant="secondary"
        className="ms-1"
        onClick={() => dispatch({ type: 'reset' })}
      >
        Reset
      </Button>
    </div>
  );
}
