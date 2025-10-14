import { useEffect, useState } from 'react';

const ConsoleMessage = () => {
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (checked) {
      setMessage('Checked!');
    } else {
      setMessage('Unchecked!');
    }
  }, [checked]);

  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-2xl shadow-2xl">
      <label className="relative flex items-center gap-2 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="absolute opacity-0 w-0 h-0" // hide the default checkbox
        />
        <span
          className={`w-4 h-4 p-2 flex-shrink-0 rounded border border-gray-400 flex items-center justify-center transition-colors
        ${
          checked
            ? 'bg-primary-500 ring-2 ring-primary-400 border-transparent'
            : 'bg-white'
        }`}
        >
          {checked && <i className="ri-check-line text-white text-sm"></i>}
        </span>
        Console Message
      </label>
      <p className="px-3 border-l-2 border-secondary-500">{message}</p>
    </div>
  );
};

export default ConsoleMessage;
