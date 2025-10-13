import { useState, type ChangeEvent, type FormEvent } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const ToDo = () => {
  const [list, setList] = useState<string[]>([]);
  const [task, setTask] = useState('');

  function addTask(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (task.trim()) setList((prev) => [...prev, task]);
    setTask('');
  }

  function removeTask(index: number): void {
    setList((prev) => prev.filter((_, i) => i !== index));
  }

  function getInputValue(e: ChangeEvent<HTMLInputElement>): void {
    setTask(e.target.value);
  }

  return (
    <div className="w-full max-w-80 px-4 py-6 shadow-xl rounded-2xl">
      <h2 className="text-2xl font-semibold text-primary-500">To Do List</h2>

      <form className="flex flex-col" onSubmit={(e) => addTask(e)}>
        <Input
          id="task"
          label="Task Name"
          value={task}
          onChange={(e) => getInputValue(e)}
          placeholder="Enter task name"
          name="task"
        />
      </form>

      {list.length === 0 ? (
        <p className="text-gray-500 italic mt-4">No tasks yet. Add one!</p>
      ) : (
        <ul className="list-disc">
          {list.map((t, i) => {
            return (
              <li
                key={i}
                className="flex justify-between items-center py-2 px-3 rounded"
              >
                <p className="italic">{t}</p>
                <Button
                  variant="danger"
                  styleOverrides={{ padding: 'px-2 py-1' }}
                  onClick={() => removeTask(i)}
                >
                  <i className="ri-close-line"></i>
                </Button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ToDo;
