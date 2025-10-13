import { useEffect, useState } from 'react';

const ConsoleMessage = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) console.log('checked!');
    else console.log('unchecked!');
  }, [checked]);

  return (
    <div className="flex items-center gap-2">
      <label className="relative flex items-center gap-2 cursor-pointer">
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
            ? 'bg-blue-500 ring-2 ring-blue-400 border-transparent'
            : 'bg-white'
        }`}
        >
          {checked && <i className="ri-check-line text-white text-sm"></i>}
        </span>
        Console Message
      </label>
    </div>
  );
};

export default ConsoleMessage;
