import { useNavigate } from 'react-router-dom';
import { BookOpen, GamepadIcon, Trophy, Star } from 'lucide-react';
import { useUserLevel } from '../context/UserLevelContext';

const MenuCard = ({ icon: Icon, title, description, onClick }: {
  icon: React.ElementType;
  title: string;
  description: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow w-full"
  >
    <div className="flex items-start space-x-4">
      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </div>
      <div className="flex-1 text-left">
        <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  </button>
);

const Menu = () => {
  const navigate = useNavigate();
  const { level } = useUserLevel();

  // Define activities based on user level
  const beginnerActivities = [
    {
      icon: BookOpen,
      title: 'Tareas Básicas',
      description: 'Aprende a contar y reconocer números',
      path: '/tasks'
    },
    {
      icon: GamepadIcon,
      title: 'Juegos Sencillos',
      description: 'Diviértete con juegos de números',
      path: '/games'
    },
    {
      icon: Trophy,
      title: 'Logros',
      description: 'Mira tus medallas y progreso',
      path: '/achievements'
    }
  ];

  const intermediateActivities = [
    {
      icon: BookOpen,
      title: 'Tareas de Sumas',
      description: 'Practica sumas con números del 1 al 10',
      path: '/tasks'
    },
    {
      icon: GamepadIcon,
      title: 'Juegos de Sumas',
      description: 'Juegos divertidos para practicar sumas',
      path: '/games'
    },
    {
      icon: Trophy,
      title: 'Logros',
      description: 'Mira tus medallas y progreso',
      path: '/achievements'
    }
  ];

  const advancedActivities = [
    {
      icon: BookOpen,
      title: 'Tareas de Sumas y Restas',
      description: 'Practica operaciones más complejas',
      path: '/tasks'
    },
    {
      icon: GamepadIcon,
      title: 'Juegos Avanzados',
      description: 'Desafíos matemáticos divertidos',
      path: '/games'
    },
    {
      icon: Trophy,
      title: 'Logros',
      description: 'Mira tus medallas y progreso',
      path: '/achievements'
    }
  ];

  // Select activities based on level
  const menuItems = level === 'beginner' 
    ? beginnerActivities 
    : level === 'intermediate' 
      ? intermediateActivities 
      : advancedActivities;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            ¡Hola, Estudiante!
            {level === 'beginner' && ' (Nivel Principiante)'}
            {level === 'intermediate' && ' (Nivel Intermedio)'}
            {level === 'advanced' && ' (Nivel Avanzado)'}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">¿Qué quieres aprender hoy?</p>
        </div>
        <div className="flex items-center space-x-1 bg-yellow-100 dark:bg-yellow-900 px-3 py-1 rounded-full">
          <Star className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
          <span className="font-semibold text-yellow-700 dark:text-yellow-300">250 pts</span>
        </div>
      </div>

      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <MenuCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            onClick={() => navigate(item.path)}
          />
        ))}
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Próxima Lección</h3>
        <p className="text-blue-600 dark:text-blue-400 text-sm">
          {level === 'beginner' && 'Aprendiendo a Contar - 2:00 PM'}
          {level === 'intermediate' && 'Sumas Divertidas - 2:00 PM'}
          {level === 'advanced' && 'Sumas y Restas Avanzadas - 2:00 PM'}
        </p>
      </div>
    </div>
  );
};

export default Menu;