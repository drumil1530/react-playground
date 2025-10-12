import React, { type InputHTMLAttributes } from 'react';

// Extending native input props for full flexibility
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Optional label for the input
  error?: string; // Optional error message
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  name,
  error,
  className,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
      )}
      <input
        className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        id={id}
        name={name}
        {...props}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default Input;
