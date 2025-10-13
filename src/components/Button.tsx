import type { JSX } from "react";

type ButtonColor =
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'
  | 'white';

type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

type ButtonProps = {
  textColor?: ButtonColor;
  bgColor?: ButtonColor;
  radius?: ButtonRadius;
  text: string | JSX.Element;
  onClick?: () => void;
  padding?: string;
};

const textColorMap: Record<ButtonColor, string> = {
  slate: 'text-slate-700',
  gray: 'text-gray-700',
  zinc: 'text-zinc-700',
  neutral: 'text-neutral-700',
  stone: 'text-stone-700',
  red: 'text-red-700',
  orange: 'text-orange-700',
  amber: 'text-amber-700',
  yellow: 'text-yellow-700',
  lime: 'text-lime-700',
  green: 'text-green-700',
  emerald: 'text-emerald-700',
  teal: 'text-teal-700',
  cyan: 'text-cyan-700',
  sky: 'text-sky-700',
  blue: 'text-blue-700',
  indigo: 'text-indigo-700',
  violet: 'text-violet-700',
  purple: 'text-purple-700',
  fuchsia: 'text-fuchsia-700',
  pink: 'text-pink-700',
  rose: 'text-rose-700',
  white: 'text-white',
};

const bgColorMap: Record<ButtonColor, string> = {
  slate: 'bg-slate-500',
  gray: 'bg-gray-500',
  zinc: 'bg-zinc-500',
  neutral: 'bg-neutral-500',
  stone: 'bg-stone-500',
  red: 'bg-red-500',
  orange: 'bg-orange-500',
  amber: 'bg-amber-500',
  yellow: 'bg-yellow-500',
  lime: 'bg-lime-500',
  green: 'bg-green-500',
  emerald: 'bg-emerald-500',
  teal: 'bg-teal-500',
  cyan: 'bg-cyan-500',
  sky: 'bg-sky-500',
  blue: 'bg-blue-500',
  indigo: 'bg-indigo-500',
  violet: 'bg-violet-500',
  purple: 'bg-purple-500',
  fuchsia: 'bg-fuchsia-500',
  pink: 'bg-pink-500',
  rose: 'bg-rose-500',
  white: 'bg-white',
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

const Button = ({
  textColor = 'white',
  bgColor = 'blue',
  radius = 'md',
  text,
  onClick,
  padding = 'px-4 py-2',
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${textColorMap[textColor]} ${bgColorMap[bgColor]} ${radiusMap[radius]} ${padding} font-semibold hover:cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default Button;
