import { Medal, Star, Trophy, Award, Sparkles, BookOpen } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';

const Profile = () => {
  const username = "Juan";
  const initialLetter = username.charAt(0).toUpperCase();
  
  const achievements = [
    { icon: Star, label: 'Matemático Estrella', date: '15 Mar 2024', animation: 'https://lottie.host/2a175f72-8b56-4ab7-b16c-48b8e21336c3/QkbOyaI3Wd.json' },
    { icon: Trophy, label: 'Rey de las Sumas', date: '10 Mar 2024', animation: 'https://lottie.host/2a175f72-8b56-4ab7-b16c-48b8e21336c3/QkbOyaI3Wd.json' },
    { icon: Medal, label: 'Experto en Restas', date: '5 Mar 2024', animation: 'https://lottie.host/2a175f72-8b56-4ab7-b16c-48b8e21336c3/QkbOyaI3Wd.json' },
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-6 shadow-xl mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
            <span className="text-4xl font-bold text-blue-600">{initialLetter}</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">{username}</h1>
            <p className="text-blue-100">Primer Grado</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-white">250</div>
            <div className="text-sm text-blue-100">Estrellas</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-white">15</div>
            <div className="text-sm text-blue-100">Logros</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-white">8</div>
            <div className="text-sm text-blue-100">Nivel</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-xl mb-6">
        <div className="flex items-center space-x-2 mb-6">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <h2 className="text-xl font-bold text-gray-800">
            Mis Logros Especiales
          </h2>
        </div>
        
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center space-x-4 bg-blue-50 rounded-2xl p-4 transform hover:scale-105 transition-all">
              <div className="w-16 h-16">
                <Player
                  autoplay
                  loop
                  src={achievement.animation}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">
                  {achievement.label}
                </h3>
                <p className="text-sm text-gray-500">{achievement.date}</p>
              </div>
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <BookOpen className="w-8 h-8" />
          <div>
            <h2 className="text-lg font-bold">¡Próxima Aventura!</h2>
            <p className="text-sm opacity-90">
              ¡Completa 5 ejercicios más para desbloquear un premio especial!
            </p>
          </div>
        </div>
        
        <div className="w-full bg-white/20 rounded-full h-4 mt-4">
          <div 
            className="bg-white rounded-full h-4 transition-all duration-500"
            style={{ width: '60%' }}
          />
        </div>
        <p className="text-sm text-white/80 mt-2 text-center">
          ¡Ya casi lo logras! 3/5 ejercicios completados
        </p>
      </div>
    </div>
  );
};

export default Profile;