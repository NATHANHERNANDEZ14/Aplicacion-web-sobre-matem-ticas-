import { Bell } from 'lucide-react';
import { useState } from 'react';
import { Toaster, toast } from 'sonner';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: '¡Nueva Tarea!',
      message: 'Tienes una nueva tarea de matemáticas para practicar.',
      time: 'Hace 5 minutos',
      read: false
    },
    {
      id: 2,
      title: '¡Logro Desbloqueado!',
      message: 'Has ganado la medalla "Matemático Estrella".',
      time: 'Hace 1 hora',
      read: false
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const showNotification = () => {
    toast('¡Nueva notificación!', {
      description: 'Has recibido una nueva tarea para practicar.',
      action: {
        label: 'Ver',
        onClick: () => setIsOpen(true)
      },
    });
  };

  return (
    <>
      <Toaster position="top-right" expand={true} richColors />
      
      <div className="fixed top-4 right-20 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
        >
          <Bell className="w-6 h-6 text-gray-800 dark:text-white" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Notificaciones
              </h3>
            </div>
            
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-gray-200 dark:border-gray-700 ${
                    !notification.read ? 'bg-blue-50 dark:bg-blue-900/30' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {notification.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {notification.message}
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 block">
                    {notification.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4">
              <button
                onClick={showNotification}
                className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Probar Notificación
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationCenter;