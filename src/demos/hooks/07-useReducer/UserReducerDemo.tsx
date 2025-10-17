import ReducerDemo from './ReducerDemo';
import ToDoManagement from './ToDoManagement';

const UserReducerDemo = () => {
  return (
    <div>
      <h1 className="text-4xl text-primary-500 font-semibold">
        UserReducerDemo
      </h1>
      <div className="flex flex-wrap gap-2 px-2 py-3 rounded-2xl shadow-xl bg-bg-100 *:bg-bg-200 *:rounded-2xl">
        <ReducerDemo />
        <ToDoManagement />
      </div>
    </div>
  );
};

export default UserReducerDemo;
