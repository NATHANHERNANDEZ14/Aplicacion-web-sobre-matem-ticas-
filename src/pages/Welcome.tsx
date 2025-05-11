import { useNavigate } from 'react-router-dom';
import { Brain, Star, Sparkles } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col items-center justify-center p-6 text-white relative overflow-hidden">
      {/* Floating animations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {i % 2 === 0 ? (
              <Star className="w-6 h-6 text-yellow-300 opacity-50" />
            ) : (
              <Sparkles className="w-6 h-6 text-yellow-200 opacity-50" />
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8 transform hover:scale-110 transition-transform">
          <Player
            autoplay
            loop
            src="https://lottie.host/2a175f72-8b56-4ab7-b16c-48b8e21336c3/QkbOyaI3Wd.json"
            style={{ height: '200px', width: '200px' }}
          />
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-center animate-bounce">
          ¡Matemáticas Divertidas!
        </h1>
        
        <p className="text-xl mb-8 text-center">
          ¡Aprende matemáticas con juegos y diversión!
        </p>
        
        <button
          onClick={() => navigate('/auth')}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition-all transform hover:scale-105 hover:shadow-xl"
        >
          ¡Comenzar la Aventura!
        </button>
        
        <div className="mt-12 grid grid-cols-2 gap-4">
          <div className="bg-white/20 backdrop-blur-lg rounded-lg p-4 transform hover:scale-105 transition-all">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800"
              alt="Niños estudiando"
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <p className="text-sm text-center">¡Aprende jugando!</p>
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-lg p-4 transform hover:scale-105 transition-all">
            <img
              src="https://images.unsplash.com/photo-1503676382389-4809596d5290?w=800"
              alt="Aprendizaje divertido"
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <p className="text-sm text-center">¡Gana premios!</p>
          </div>
        </div>

        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-full px-6 py-2">
          <p className="text-sm">¡Más de 1000 niños ya están aprendiendo!</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;