import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle, Lock, ArrowRight, Sparkles, Star } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showCode, setShowCode] = useState(false);
  const [code, setCode] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/menu');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!showCode) {
      // Generate a random 6-digit code
      const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
      setCode(randomCode);
      setShowCode(true);
    } else {
      navigate('/survey');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Player
            autoplay
            loop
            src="https://lottie.host/2a175f72-8b56-4ab7-b16c-48b8e21336c3/QkbOyaI3Wd.json"
            style={{ height: '150px', width: '150px', margin: '0 auto' }}
          />
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          {isLogin ? (
            <>
              <div className="flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-yellow-400 animate-spin-slow" />
                <h2 className="text-3xl font-bold text-center text-gray-800 ml-2">
                  ¡Hola de nuevo!
                </h2>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <UserCircle className="absolute left-3 top-3 text-blue-500" />
                    <input
                      type="text"
                      placeholder="Nombre de usuario"
                      value={loginUsername}
                      onChange={(e) => setLoginUsername(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg"
                    />
                  </div>
                  
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-blue-500" />
                    <input
                      type="password"
                      placeholder="Contraseña"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center group"
                >
                  <span>¡Vamos a aprender!</span>
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </>
          ) : (
            <>
              {!showCode ? (
                <>
                  <div className="flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8 text-purple-500 animate-pulse" />
                    <h2 className="text-3xl font-bold text-center text-gray-800 ml-2">
                      ¡Únete a la diversión!
                    </h2>
                  </div>
                  
                  <form onSubmit={handleRegister} className="space-y-6">
                    <div className="space-y-4">
                      <div className="relative">
                        <UserCircle className="absolute left-3 top-3 text-purple-500" />
                        <input
                          type="text"
                          placeholder="Nombre de usuario"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-lg"
                        />
                      </div>
                      
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 text-purple-500" />
                        <input
                          type="password"
                          placeholder="Contraseña"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-lg"
                        />
                      </div>

                      <div className="relative">
                        <Lock className="absolute left-3 top-3 text-purple-500" />
                        <input
                          type="password"
                          placeholder="Confirmar contraseña"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-lg"
                        />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-purple-700 transition-colors flex items-center justify-center group"
                    >
                      <span>¡Obtener código mágico!</span>
                      <Sparkles className="ml-2 w-6 h-6 group-hover:scale-110 transition-transform" />
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <Sparkles className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    ¡Tu código mágico es!
                  </h2>
                  <div className="bg-purple-100 p-6 rounded-2xl mb-6">
                    <p className="text-4xl font-bold text-purple-600 tracking-wider">
                      {code}
                    </p>
                  </div>
                  <p className="text-gray-600 mb-6">
                    ¡Guarda este código mágico para entrar a tu cuenta!
                  </p>
                  <button
                    onClick={handleRegister}
                    className="w-full bg-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-purple-700 transition-colors"
                  >
                    ¡Comenzar la aventura!
                  </button>
                </div>
              )}
            </>
          )}
          
          <p className="mt-6 text-center text-gray-600">
            {isLogin ? '¿Primera vez aquí?' : '¿Ya tienes una cuenta?'}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setShowCode(false);
                // Reset form states when switching between login and register
                setUsername('');
                setPassword('');
                setConfirmPassword('');
                setLoginUsername('');
                setLoginPassword('');
              }}
              className="ml-2 text-blue-600 font-bold hover:underline"
            >
              {isLogin ? '¡Regístrate!' : '¡Inicia sesión!'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;