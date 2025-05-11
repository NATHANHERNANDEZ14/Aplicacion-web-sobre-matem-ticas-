import { Calendar, CheckCircle, Clock, Star, BookOpen, Lock } from 'lucide-react';
import { useState } from 'react';
import { useUserLevel } from '../context/UserLevelContext';

// Define curriculum and tasks for each block
const blockCurriculum = {
  '1': {
    title: 'Números del 1 al 10',
    topics: [
      'Reconocimiento de números',
      'Conteo de objetos',
      'Secuencia numérica',
      'Comparación de cantidades'
    ],
    tasks: [
      {
        id: 1,
        title: 'Contar del 1 al 5',
        description: 'Aprende a contar objetos y reconocer números',
        type: 'practice',
        dueDate: '2024-03-20',
        completed: false,
        points: 30,
        problems: [
          {
            question: '¿Cuántas manzanas hay?',
            image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=500',
            options: ['2', '3', '4'],
            correctAnswer: '3'
          },
          {
            question: '¿Qué número es este?',
            image: 'https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=500',
            options: ['4', '5', '6'],
            correctAnswer: '5'
          }
        ]
      },
      {
        id: 2,
        title: 'Contar del 6 al 10',
        description: 'Practica con números mayores',
        type: 'practice',
        dueDate: '2024-03-21',
        completed: false,
        points: 40,
        problems: [
          {
            question: '¿Cuántos lápices hay?',
            image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=500',
            options: ['7', '8', '9'],
            correctAnswer: '8'
          }
        ]
      }
    ]
  },
  '2': {
    title: 'Sumas hasta 10',
    topics: [
      'Concepto de suma',
      'Sumas con números del 1 al 5',
      'Sumas con números hasta 10',
      'Problemas verbales de suma'
    ],
    tasks: [
      {
        id: 1,
        title: 'Sumas básicas',
        description: 'Aprende a sumar números pequeños',
        type: 'practice',
        dueDate: '2024-03-22',
        completed: false,
        points: 50,
        locked: true,
        problems: [
          {
            question: '¿Cuánto es 2 + 3?',
            options: ['4', '5', '6'],
            correctAnswer: '5'
          }
        ]
      }
    ]
  },
  '3': {
    title: 'Restas hasta 10',
    topics: [
      'Concepto de resta',
      'Restas con números del 1 al 5',
      'Restas con números hasta 10',
      'Problemas verbales de resta'
    ],
    tasks: [
      {
        id: 1,
        title: 'Restas básicas',
        description: 'Aprende a restar números pequeños',
        type: 'practice',
        dueDate: '2024-03-23',
        completed: false,
        points: 60,
        locked: true,
        problems: [
          {
            question: '¿Cuánto es 5 - 2?',
            options: ['2', '3', '4'],
            correctAnswer: '3'
          }
        ]
      }
    ]
  },
  '4': {
    title: 'Números hasta 20',
    topics: [
      'Reconocimiento de números del 11 al 20',
      'Conteo hasta 20',
      'Sumas y restas hasta 20',
      'Secuencias numéricas'
    ],
    tasks: [
      {
        id: 1,
        title: 'Números mayores',
        description: 'Trabaja con números hasta el 20',
        type: 'practice',
        dueDate: '2024-03-24',
        completed: false,
        points: 70,
        locked: true,
        problems: [
          {
            question: '¿Qué número viene después del 15?',
            options: ['14', '16', '17'],
            correctAnswer: '16'
          }
        ]
      }
    ]
  },
  '5': {
    title: 'Formas y Patrones',
    topics: [
      'Formas geométricas básicas',
      'Patrones simples',
      'Secuencias de formas y colores',
      'Clasificación de objetos'
    ],
    tasks: [
      {
        id: 1,
        title: 'Formas básicas',
        description: 'Identifica formas geométricas',
        type: 'practice',
        dueDate: '2024-03-25',
        completed: false,
        points: 80,
        locked: true,
        problems: [
          {
            question: '¿Qué forma es esta?',
            image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=500',
            options: ['Círculo', 'Cuadrado', 'Triángulo'],
            correctAnswer: 'Círculo'
          }
        ]
      }
    ]
  }
};

interface Problem {
  question: string;
  image?: string;
  options: string[];
  correctAnswer: string;
}

interface Task {
  id: number;
  title: string;
  description: string;
  type: string;
  dueDate: string;
  completed: boolean;
  points: number;
  locked?: boolean;
  problems: Problem[];
}

interface Block {
  title: string;
  topics: string[];
  tasks: Task[];
}

const TaskExercise = ({ task, onComplete, problems }: { 
  task: Task;
  onComplete: () => void;
  problems: Problem[];
}) => {
  const [currentProblem, setCurrentProblem] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (answer: string) => {
    const correct = answer === problems[currentProblem].correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      setShowFeedback(false);
      if (currentProblem < problems.length - 1) {
        setCurrentProblem(currentProblem + 1);
      } else {
        setCompleted(true);
      }
    }, 1500);
  };

  if (completed) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
        <div className="text-center">
          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <Star className="w-10 h-10 text-yellow-500 dark:text-yellow-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">¡Ejercicio Completado!</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Obtuviste {score} de {problems.length} respuestas correctas</p>
          <p className="text-green-600 dark:text-green-400 font-semibold mb-6">+{task.points} puntos ganados</p>
          
          <button
            onClick={onComplete}
            className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            Volver a Tareas
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{task.title}</h3>
        <div className="flex items-center space-x-1 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
          <span className="font-medium text-blue-700 dark:text-blue-300">
            Problema {currentProblem + 1}/{problems.length}
          </span>
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
              <div className="w-16 h-16 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center mb-4">
                <span className="text-3xl text-red-500 dark:text-red-400">✗</span>
              </div>
              <h3 className="text-xl font-bold text-red-700 dark:text-red-300">¡Inténtalo de nuevo!</h3>
              <p className="text-red-600 dark:text-red-400">
                La respuesta correcta era: {problems[currentProblem].correctAnswer}
              </p>
            </>
          )}
        </div>
      ) : (
        <>
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
              {problems[currentProblem].question}
            </h4>
            
            {problems[currentProblem].image && (
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                <img 
                  src={problems[currentProblem].image} 
                  alt="Problema" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
          
          <div className="space-y-3">
            {problems[currentProblem].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full flex items-center justify-between p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
              >
                <span className="text-gray-700 dark:text-gray-200 text-lg font-medium">{option}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const BlockCard = ({ block, title, topics, tasks, isActive, onClick }: {
  block: string;
  title: string;
  topics: string[];
  tasks: Task[];
  isActive: boolean;
  onClick: () => void;
}) => {
  const completedTasks = tasks.filter(task => task.completed).length;
  const isLocked = block !== '1' && completedTasks === 0;

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer transition-all ${
        isActive ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
      } ${isLocked ? 'opacity-75' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          Bloque {block}: {title}
        </h3>
        {isLocked && (
          <Lock className="w-6 h-6 text-gray-400 dark:text-gray-500" />
        )}
      </div>

      <div className="space-y-2 mb-4">
        {topics.map((topic, index) => (
          <div key={index} className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-blue-500 dark:text-blue-400" />
            <span className="text-gray-600 dark:text-gray-300 text-sm">{topic}</span>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>Progreso</span>
          <span>{completedTasks}/{tasks.length} tareas</span>
        </div>
        <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          <div
            className="h-2 bg-blue-500 dark:bg-blue-400 rounded-full transition-all"
            style={{ width: `${(completedTasks / tasks.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

const Tasks = () => {
  const { block } = useUserLevel();
  const [selectedBlock, setSelectedBlock] = useState(block);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const startTask = (task: Task) => {
    setActiveTask(task);
  };

  const completeTask = () => {
    const updatedTasks = blockCurriculum[selectedBlock as keyof typeof blockCurriculum].tasks.map(t => 
      t.id === activeTask?.id ? { ...t, completed: true } : t
    );
    blockCurriculum[selectedBlock as keyof typeof blockCurriculum].tasks = updatedTasks;
    setActiveTask(null);
  };

  if (activeTask) {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <TaskExercise 
          task={activeTask} 
          onComplete={completeTask} 
          problems={activeTask.problems}
        />
      </div>
    );
  }

  const currentBlock = blockCurriculum[selectedBlock as keyof typeof blockCurriculum];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Bloques de Aprendizaje
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Selecciona un bloque para ver su contenido
          </p>
        </div>
        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
          <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
      </div>

      <div className="grid gap-4 mb-8">
        {Object.entries(blockCurriculum).map(([blockNum, { title, topics, tasks }]) => (
          <BlockCard
            key={blockNum}
            block={blockNum}
            title={title}
            topics={topics}
            tasks={tasks}
            isActive={selectedBlock === blockNum}
            onClick={() => setSelectedBlock(blockNum)}
          />
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
          Tareas del Bloque {selectedBlock}
        </h2>
        
        {currentBlock.tasks.map((task) => (
          <div
            key={task.id}
            className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 ${
              task.completed
                ? 'border-green-500'
                : task.locked
                  ? 'border-gray-300 dark:border-gray-600'
                  : 'border-blue-500'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                    {task.title}
                  </h3>
                  {task.completed && (
                    <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                  )}
                  {task.locked && (
                    <Lock className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  {task.description}
                </p>
              </div>
              <div className="flex items-center space-x-1 bg-yellow-100 dark:bg-yellow-900 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
                <span className="font-medium text-yellow-700 dark:text-yellow-300">
                  {task.points} pts
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                <span>Fecha límite: {task.dueDate}</span>
              </div>
              {!task.completed && !task.locked && (
                <button 
                  onClick={() => startTask(task)}
                  className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                >
                  Comenzar
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;