import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, X } from 'lucide-react';
import LogoutButton from '../components/LogoutButton';
import { useUserLevel } from '../context/UserLevelContext';

interface Question {
  id: number;
  text: string;
  image: string;
  options: Array<{
    text: string;
    image?: string;
    isCorrect?: boolean;
    value?: number;
  }>;
}

const questions: Question[] = [
  {
    id: 1,
    text: '¿Puedes contar del 1 al 10?',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=500&auto=format&fit=crop',
    options: [
      { 
        text: 'Sí, muy bien', 
        image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=200&auto=format&fit=crop',
        value: 3
      },
      { 
        text: 'Más o menos', 
        image: 'https://images.unsplash.com/photo-1594079995223-7c3ef20b4a19?w=200&auto=format&fit=crop',
        value: 2
      },
      { 
        text: 'Necesito ayuda', 
        image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=200&auto=format&fit=crop',
        value: 1
      }
    ]
  },
  {
    id: 2,
    text: '¿Sabes sumar números pequeños?',
    image: 'https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=500&auto=format&fit=crop',
    options: [
      { 
        text: 'Sí, del 1 al 10', 
        image: 'https://images.unsplash.com/photo-1594079995223-7c3ef20b4a19?w=200&auto=format&fit=crop',
        value: 3
      },
      { 
        text: 'Solo números del 1 al 5', 
        image: 'https://images.unsplash.com/photo-1594079995223-7c3ef20b4a19?w=200&auto=format&fit=crop',
        value: 2
      },
      { 
        text: 'Todavía no', 
        image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=200&auto=format&fit=crop',
        value: 1
      }
    ]
  },
  {
    id: 3,
    text: '¿Conoces las formas geométricas básicas?',
    image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=500&auto=format&fit=crop',
    options: [
      { 
        text: 'Sí, todas', 
        image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=200&auto=format&fit=crop',
        value: 3
      },
      { 
        text: 'Algunas', 
        image: 'https://images.unsplash.com/photo-1594079995223-7c3ef20b4a19?w=200&auto=format&fit=crop',
        value: 2
      },
      { 
        text: 'No muy bien', 
        image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=200&auto=format&fit=crop',
        value: 1
      }
    ]
  },
  {
    id: 4,
    text: '¿Cuál es el resultado de 2 + 3?',
    image: 'https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=500&auto=format&fit=crop',
    options: [
      { text: '4', isCorrect: false, value: 0 },
      { text: '5', isCorrect: true, value: 3 },
      { text: '6', isCorrect: false, value: 0 }
    ]
  },
  {
    id: 5,
    text: '¿Cuál es el resultado de 5 - 2?',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&auto=format&fit=crop',
    options: [
      { text: '2', isCorrect: false, value: 0 },
      { text: '3', isCorrect: true, value: 3 },
      { text: '4', isCorrect: false, value: 0 }
    ]
  }
];

const Survey = () => {
  const navigate = useNavigate();
  const { setLevel } = useUserLevel();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer: string, index: number) => {
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: answer }));
    
    // Add to score based on answer value
    const currentOption = questions[currentQuestion].options[index];
    if (currentOption.value) {
      setScore(prevScore => prevScore + currentOption.value);
    }
    
    // Check if the question has correct answers
    const currentOptions = questions[currentQuestion].options;
    if (currentOptions[index].hasOwnProperty('isCorrect')) {
      setIsCorrect(!!currentOptions[index].isCorrect);
      setShowFeedback(true);
      
      // Move to next question after a delay
      setTimeout(() => {
        setShowFeedback(false);
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
        } else {
          // Determine level based on score
          const maxPossibleScore = questions.reduce((total, question) => {
            const maxOptionValue = Math.max(...question.options.map(opt => opt.value || 0));
            return total + maxOptionValue;
          }, 0);
          
          if (score >= maxPossibleScore * 0.8) {
            setLevel('advanced');
          } else if (score >= maxPossibleScore * 0.5) {
            setLevel('intermediate');
          } else {
            setLevel('beginner');
          }
          
          navigate('/menu');
        }
      }, 1500);
    } else {
      // If no correct answer, just move to next question
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        // Determine level based on score
        const maxPossibleScore = questions.reduce((total, question) => {
          const maxOptionValue = Math.max(...question.options.map(opt => opt.value || 0));
          return total + maxOptionValue;
        }, 0);
        
        if (score >= maxPossibleScore * 0.8) {
          setLevel('advanced');
        } else if (score >= maxPossibleScore * 0.5) {
          setLevel('intermediate');
        } else {
          setLevel('beginner');
        }
        
        navigate('/menu');
      }
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col items-center justify-center p-6">
      <LogoutButton />
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 w-full max-w-md shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Evaluación Inicial
            </h2>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {currentQuestion + 1} de {questions.length}
          </span>
        </div>

        <div className="mb-6">
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
            <div
              className="h-2 bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {showFeedback ? (
          <div className={`flex flex-col items-center justify-center p-8 rounded-lg ${
            isCorrect 
              ? 'bg-green-100 dark:bg-green-900' 
              : 'bg-red-100 dark:bg-red-900'
          }`}>
            {isCorrect ? (
              <>
                <CheckCircle className="w-16 h-16 text-green-500 dark:text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-green-700 dark:text-green-300">¡Correcto!</h3>
                <p className="text-green-600 dark:text-green-400">¡Muy bien hecho!</p>
              </>
            ) : (
              <>
                <X className="w-16 h-16 text-red-500 dark:text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-red-700 dark:text-red-300">¡Inténtalo de nuevo!</h3>
                <p className="text-red-600 dark:text-red-400">No te preocupes, seguiremos practicando</p>
              </>
            )}
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {questions[currentQuestion].text}
              </h3>
              
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                <img 
                  src={questions[currentQuestion].image} 
                  alt="Pregunta" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.text, index)}
                  className="w-full flex items-center justify-between p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
                >
                  <div className="flex items-center">
                    {option.image && (
                      <img 
                        src={option.image} 
                        alt={option.text} 
                        className="w-12 h-12 rounded-full object-cover mr-3"
                      />
                    )}
                    <span className="text-gray-700 dark:text-gray-200">{option.text}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                </button>
              ))}
            </div>
          </>
        )}

        {currentQuestion === questions.length - 1 && !showFeedback && (
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
            Al finalizar, serás dirigido al menú principal
          </p>
        )}
      </div>
    </div>
  );
};

export default Survey;