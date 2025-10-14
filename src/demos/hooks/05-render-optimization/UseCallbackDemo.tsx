import ExpensiveListDemo from './ExpensiveListDemo';

const UseCallbackDemo = () => {
  return (
    <>
      <h1 className="text-4xl text-primary-500 font-semibold mb-2">
        useCallback Demo
      </h1>
      <div className="flex flex-wrap gap-2 *:bg-bg-200 *:rounded-2xl *:shadow-xl *:p-3">
        <ExpensiveListDemo />
      </div>
    </>
  );
};

export default UseCallbackDemo;
