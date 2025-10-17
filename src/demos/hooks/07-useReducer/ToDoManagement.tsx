/*
 * Step 2: Build a Todo app using useReducer
 * - State: array of todos
 * - Actions: ADD_TODO, TOGGLE_TODO, DELETE_TODO
 * - Input for adding, list for display
 */

import { useReducer, useRef } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

type ToDoState = {
  task?: string;
  done: boolean;
};

type Action = {
  event?: React.FormEvent<HTMLFormElement>;
  type: 'ADD_TODO' | 'TOGGLE_TODO' | 'DELETE_TODO';
  index?: number;
  value?: string;
};

function ToDo(state: ToDoState[], action: Action) {
  switch (action.type) {
    case 'ADD_TODO':
      action.event?.preventDefault();
      return [...state, { task: action.value, done: false }];
    case 'TOGGLE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    case 'DELETE_TODO':
      return state.filter((_, index) => index !== action.index);
    default:
      return state;
  }
}

const ToDoManagement = () => {
  const [state, dispatch] = useReducer(ToDo, []);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="py-2 px-3">
      <h2 className="text-3xl text-zinc-400 font-semibold">ToDoManagement</h2>
      <form
        onSubmit={(e) =>
          dispatch({
            event: e,
            type: 'ADD_TODO',
            value: inputRef.current?.value,
          })
        }
      >
        <Input ref={inputRef} type="text" />
        <Button className="mt-1 mb-3" type="submit">
          Add
        </Button>
      </form>
      <ul>
        {state.map((todo, index) => (
          <li key={index} className="rounded-xl shadow bg-bg-300 py-2 px-4">
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => dispatch({ type: 'TOGGLE_TODO', index })}
              className="me-1 w-4 aspect-square align-middle"
            />
            <span>{todo.task}</span>
            <Button
              variant="danger"
              className="ms-1"
              onClick={() => dispatch({ type: 'DELETE_TODO', index })}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoManagement;
