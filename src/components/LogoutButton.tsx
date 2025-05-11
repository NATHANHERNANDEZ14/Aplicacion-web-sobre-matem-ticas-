import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <button
      onClick={handleLogout}
      className="fixed top-4 left-4 z-50 flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      <LogOut className="w-4 h-4 text-red-500" />
      <span className="text-sm text-red-500">Cerrar Sesión</span>
    </button>
  );
};

export default LogoutButton;