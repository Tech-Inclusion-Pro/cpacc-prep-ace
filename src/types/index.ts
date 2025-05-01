
export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  incorrectExplanation: string;
}

export interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  totalTime: number;
  date: Date;
  categoryResults: {
    [category: string]: {
      total: number;
      correct: number;
      percentage: number;
    };
  };
  answers: {
    questionId: number;
    category: string;
    isCorrect: boolean;
  }[];
}

export type QuizState = 'start' | 'question' | 'feedback' | 'results';
