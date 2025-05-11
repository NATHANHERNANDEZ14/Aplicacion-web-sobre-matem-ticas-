import { Trophy, Lock, CheckCircle } from 'lucide-react';

const achievements = [
  {
    title: 'Matemático Estrella',
    description: 'Completa 10 ejercicios perfectamente',
    unlocked: true,
    progress: 100,
  },
  {
    title: 'Rey de las Sumas',
    description: 'Resuelve 20 sumas correctamente',
    unlocked: true,
    progress: 100,
  },
  {
    title: 'Experto en Restas',
    description: 'Completa el módulo de restas',
    unlocked: false,
    progress: 75,
  },
  {
    title: 'Maestro del Tiempo',
    description: 'Completa 5 ejercicios en menos de 1 minuto',
    unlocked: false,
    progress: 40,
  },
];

const Achievements = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Mis Logros</h1>
          <p className="text-gray-600">
            ¡Sigue aprendiendo para desbloquear más!
          </p>
        </div>
        <div className="bg-yellow-100 p-3 rounded-full">
          <Trophy className="w-6 h-6 text-yellow-600" />
        </div>
      </div>

      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md relative overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </div>
              <div className="ml-4">
                {achievement.unlocked ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  <Lock className="w-6 h-6 text-gray-400" />
                )}
              </div>
            </div>

            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${achievement.progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {achievement.progress}% completado
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;