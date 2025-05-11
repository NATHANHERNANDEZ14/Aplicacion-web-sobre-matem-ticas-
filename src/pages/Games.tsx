import { GamepadIcon, Star, Play } from 'lucide-react';
import { useState } from 'react';
import { useUserLevel } from '../context/UserLevelContext';

// Define games for different levels
const beginnerGames = [
  {
    title: 'Contar Objetos',
    description: 'Aprende a contar objetos divertidos',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400',
    difficulty: 'fácil',
    unlocked: true
  },
  {
    title: 'Reconocer Números',
    description: 'Identifica los números del 1 al 5',
    image: 'https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=400',
    difficulty: 'fácil',
    unlocked: true
  },
  {
    title: 'Formas y Colores',
    description: 'Aprende formas geométricas básicas',
    image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400',
    difficulty: 'fácil',
    unlocked: false
  }
];

const intermediateGames = [
  {
    title: 'Suma y Salta',
    description: 'Practica sumas mientras saltas obstáculos',
    image: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400',
    difficulty: 'fácil',
    unlocked: true
  },
  {
    title: 'Números Perdidos',
    description: 'Encuentra el número que falta',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400',
    difficulty: 'medio',
    unlocked: true
  },
  {
    title: 'Números Mágicos',
    description: 'Encuentra los números escondidos',
    image: 'https://images.unsplash.com/photo-1602976445340-a46dacf159bc?w=400',
    difficulty: 'fácil',
    unlocked: false
  }
];

const advancedGames = [
  {
    title: 'Resta Rápida',
    description: 'Resuelve restas contra el reloj',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400',
    difficulty: 'medio',
    unlocked: true
  },
  {
    title: 'Operaciones Mixtas',
    description: 'Practica sumas y restas combinadas',
    image: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400',
    difficulty: 'difícil',
    unlocked: true
  },
  {
    title: 'Desafío Matemático',
    description: 'Resuelve problemas matemáticos complejos',
    image: 'https://images.unsplash.com/photo-1602976445340-a46dacf159bc?w=400',
    difficulty: 'difícil',
    unlocked: false
  }
];

// Math games for different levels
const BeginnerMathGame = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 5) + 1);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [objects, setObjects] = useState(Array(number).fill('🍎'));

  const checkAnswer = () => {
    const userNum = parseInt(userAnswer);
    
    if (userNum === number) {
      setFeedback('¡Correcto! ¡Muy bien!');
      setScore(score + 10);
      
      // Generate new number
      setTimeout(() => {
        const newNumber = Math.floor(Math.random() * 5) + 1;
        setNumber(newNumber);
        setObjects(Array(newNumber).fill('🍎'));
        setUserAnswer('');
        setFeedback('');
      }, 1500);
    } else {
      setFeedback('¡Inténtalo de nuevo!');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">Contar Objetos</h3>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
          <span className="font-bold text-gray-800 dark:text-white">{score}</span>
        </div>
      </div>
      
      <div className="my-8 text-center">
        <div className="text-4xl mb-4">
          {objects.map((obj, i) => (
            <span key={i} className="mx-1">{obj}</span>
          ))}
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">¿Cuántas manzanas hay?</p>
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="bg-blue-100 dark:bg-blue-900 w-16 h-16 text-center rounded-lg border-2 border-blue-300 dark:border-blue-700 focus:border-blue-500 focus:outline-none text-2xl font-bold text-gray-800 dark:text-white"
        />
      </div>
      
      {feedback && (
        <div className={`text-center p-2 rounded-lg mb-4 ${
          feedback.includes('Correcto') 
            ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' 
            : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
        }`}>
          {feedback}
        </div>
      )}
      
      <button
        onClick={checkAnswer}
        className="w-full bg-purple-600 dark:bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
      >
        Comprobar
      </button>
    </div>
  );
};

const IntermediateMathGame = () => {
  const [number1, setNumber1] = useState(Math.floor(Math.random() * 5) + 1);
  const [number2, setNumber2] = useState(Math.floor(Math.random() * 5) + 1);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);

  const checkAnswer = () => {
    const correctAnswer = number1 + number2;
    const userNum = parseInt(userAnswer);
    
    if (userNum === correctAnswer) {
      setFeedback('¡Correcto! ¡Muy bien!');
      setScore(score + 10);
      
      // Generate new numbers
      setTimeout(() => {
        setNumber1(Math.floor(Math.random() * 5) + 1);
        setNumber2(Math.floor(Math.random() * 5) + 1);
        setUserAnswer('');
        setFeedback('');
      }, 1500);
    } else {
      setFeedback('¡Inténtalo de nuevo!');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">Suma Divertida</h3>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
          <span className="font-bold text-gray-800 dark:text-white">{score}</span>
        </div>
      </div>
      
      <div className="flex justify-center items-center gap-4 text-4xl font-bold my-8">
        <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 flex items-center justify-center rounded-lg text-gray-800 dark:text-white">
          {number1}
        </div>
        <span className="text-gray-800 dark:text-white">+</span>
        <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 flex items-center justify-center rounded-lg text-gray-800 dark:text-white">
          {number2}
        </div>
        <span className="text-gray-800 dark:text-white">=</span>
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="bg-blue-100 dark:bg-blue-900 w-16 h-16 text-center rounded-lg border-2 border-blue-300 dark:border-blue-700 focus:border-blue-500 focus:outline-none text-gray-800 dark:text-white"
        />
      </div>
      
      {feedback && (
        <div className={`text-center p-2 rounded-lg mb-4 ${
          feedback.includes('Correcto') 
            ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' 
            : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
        }`}>
          {feedback}
        </div>
      )}
      
      <button
        onClick={checkAnswer}
        className="w-full bg-purple-600 dark:bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
      >
        Comprobar
      </button>
    </div>
  );
};

const AdvancedMathGame = () => {
  const [operation, setOperation] = useState<'suma' | 'resta'>('suma');
  const [number1, setNumber1] = useState(Math.floor(Math.random() * 10) + 1);
  const [number2, setNumber2] = useState(Math.floor(Math.random() * (operation === 'suma' ? 10 : number1)) + 1);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);

  const checkAnswer = () => {
    const correctAnswer = operation === 'suma' ? number1 + number2 : number1 - number2;
    const userNum = parseInt(userAnswer);
    
    if (userNum === correctAnswer) {
      setFeedback('¡Correcto! ¡Muy bien!');
      setScore(score + 10);
      
      // Generate new numbers and switch operation
      setTimeout(() => {
        const newOperation = Math.random() > 0.5 ? 'suma' : 'resta';
        setOperation(newOperation);
        const newNumber1 = Math.floor(Math.random() * 10) + 1;
        const newNumber2 = Math.floor(Math.random() * (newOperation === 'suma' ? 10 : newNumber1)) + 1;
        setNumber1(newNumber1);
        setNumber2(newNumber2);
        setUserAnswer('');
        setFeedback('');
      }, 1500);
    } else {
      setFeedback('¡Inténtalo de nuevo!');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">Operaciones Mixtas</h3>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
          <span className="font-bold text-gray-800 dark:text-white">{score}</span>
        </div>
      </div>
      
      <div className="flex justify-center items-center gap-4 text-4xl font-bold my-8">
        <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 flex items-center justify-center rounded-lg text-gray-800 dark:text-white">
          {number1}
        </div>
        <span className="text-gray-800 dark:text-white">{operation === 'suma' ? '+' : '-'}</span>
        <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 flex items-center justify-center rounded-lg text-gray-800 dark:text-white">
          {number2}
        </div>
        <span className="text-gray-800 dark:text-white">=</span>
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="bg-blue-100 dark:bg-blue-900 w-16 h-16 text-center rounded-lg border-2 border-blue-300 dark:border-blue-700 focus:border-blue-500 focus:outline-none text-gray-800 dark:text-white"
        />
      </div>
      
      {feedback && (
        <div className={`text-center p-2 rounded-lg mb-4 ${
          feedback.includes('Correcto') 
            ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' 
            : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
        }`}>
          {feedback}
        </div>
      )}
      
      <button
        onClick={checkAnswer}
        className="w-full bg-purple-600 dark:bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
      >
        Comprobar
      </button>
    </div>
  );
};

const Games = () => {
  const { level } = useUserLevel();
  const [activeGame, setActiveGame] = useState<string | null>(null);

  // Select games based on level
  const gamesByLevel = level === 'beginner' 
    ? beginnerGames 
    : level === 'intermediate' 
      ? intermediateGames 
      : advancedGames;

  const startGame = (gameTitle: string) => {
    setActiveGame(gameTitle);
  };

  const renderGame = () => {
    if (level === 'beginner') {
      return <BeginnerMathGame />;
    } else if (level === 'intermediate') {
      return <IntermediateMathGame />;
    } else {
      return <AdvancedMathGame />;
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Juegos Educativos</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Aprende mientras te diviertes
          </p>
        </div>
        <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
          <GamepadIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        </div>
      </div>

      {activeGame ? (
        <div>
          {renderGame()}
          <button
            onClick={() => setActiveGame(null)}
            className="w-full mt-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Volver a Juegos
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {gamesByLevel.map((game, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
            >
              <div className="relative h-48">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    game.difficulty === 'fácil'
                      ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                      : game.difficulty === 'medio'
                        ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                        : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                  }`}>
                    {game.difficulty}
                  </span>
                </div>
                {!game.unlocked && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Star className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-medium">Necesitas 500 puntos</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
                  {game.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {game.description}
                </p>
                
                {game.unlocked && (
                  <button 
                    onClick={() => startGame(game.title)}
                    className="w-full bg-purple-600 dark:bg-purple-700 text-white py-2 rounded-lg font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    <span>Jugar ahora</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Games;