import type { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

type ButtonFont =
  | 'font-thin'
  | 'font-light'
  | 'font-normal'
  | 'font-medium'
  | 'font-semibold'
  | 'font-bold'
  | 'font-extrabold';

type ButtonPadding = 'px-2 py-1' | 'px-4 py-2' | 'px-6 py-3' | 'px-3 py-1';

type ButtonCursor =
  | 'cursor-default'
  | 'cursor-pointer'
  | 'hover:cursor-pointer'
  | 'cursor-not-allowed'
  | 'hover:cursor-not-allowed';

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  styleOverrides?: Partial<ButtonStyle>;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonStyle = {
  bg: string;
  text: string;
  padding: ButtonPadding;
  radius: ButtonRadius;
  font: ButtonFont;
  cursor: ButtonCursor;
};

const radiusMap: Record<ButtonRadius, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
};

const defaultButtonStyle: ButtonStyle = {
  bg: 'bg-gray-500',
  text: 'text-white',
  padding: 'px-4 py-2',
  radius: 'xl',
  font: 'font-semibold',
  cursor: 'hover:cursor-pointer',
};

const predefinedVariants: Record<ButtonVariant, Partial<ButtonStyle>> = {
  primary: { bg: 'bg-primary-500' },
  secondary: { bg: 'bg-gray-500' },
  success: { bg: 'bg-success-500' },
  danger: { bg: 'bg-danger-500' },
  warning: { bg: 'bg-warning-400', text: 'text-gray-900' },
};

// Main Button component
const Button = ({
  variant = 'primary',
  className = '',
  styleOverrides = {},
  children,
  ...rest
}: ButtonProps) => {
  // Compose final style: default + variant + runtime overrides
  const theme: ButtonStyle = {
    ...defaultButtonStyle,
    ...predefinedVariants[variant],
    ...styleOverrides,
  };

  return (
    <button
      className={`${theme.bg} ${theme.text} ${radiusMap[theme.radius]} ${
        theme.padding
      } ${theme.font} ${theme.cursor} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
