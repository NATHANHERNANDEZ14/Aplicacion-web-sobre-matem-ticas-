import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';


const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleTheme}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        {theme === 'light' ? (
          <Moon className="w-6 h-6 text-gray-800" />
        ) : (
          <Sun className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;