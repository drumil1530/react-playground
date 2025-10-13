import { useEffect, useState } from 'react';
import Button from './Button';

const ThemeToggle = () => {
  const body = document.body.dataset;
  const savedTheme = localStorage.getItem('theme') ?? 'light';
  const [theme, setTheme] = useState<string>(savedTheme);

  useEffect(() => {
    body.theme = theme;
    localStorage.setItem('theme', theme);
  }, [body, theme]);

  return (
    <Button
      styleOverrides={{ padding: 'px-2 py-1' }}
      onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
    >
      {theme === 'light' ? (
        <i className="ri-sun-fill"></i>
      ) : (
        <i className="ri-moon-fill"></i>
      )}
    </Button>
  );
};

export default ThemeToggle;
