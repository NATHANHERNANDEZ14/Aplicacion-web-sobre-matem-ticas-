import { Outlet } from 'react-router-dom';
import { Brain, Trophy, BookOpen, GamepadIcon, UserCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import LogoutButton from './LogoutButton';
import NotificationCenter from './NotificationCenter';
import { useCallback } from 'react';
import PullToRefresh from 'react-pull-to-refresh';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/menu', icon: Brain, label: 'Menú' },
    { path: '/achievements', icon: Trophy, label: 'Logros' },
    { path: '/tasks', icon: BookOpen, label: 'Tareas' },
    { path: '/games', icon: GamepadIcon, label: 'Juegos' },
    { path: '/profile', icon: UserCircle, label: 'Perfil' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg">
      <div className="flex justify-around items-center p-3">
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center ${
              isActive(path) 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs mt-1">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

const Layout = () => {
  const handleRefresh = useCallback(async () => {
    // Simulate refresh delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    window.location.reload();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LogoutButton />
      <ThemeSwitcher />
      <NotificationCenter />
      <PullToRefresh onRefresh={handleRefresh}>
        <div className="pb-20">
          <Outlet />
        </div>
      </PullToRefresh>
      <Navigation />
    </div>
  );
};

export default Layout;