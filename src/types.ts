export interface User {
  id: string;
  name: string;
  grade: number;
  avatar: string;
  points: number;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  difficulty: 'fácil' | 'medio' | 'difícil';
}