
import React, { useState, useCallback } from 'react';
import StartScreen from './StartScreen';
import QuizQuestion from './QuizQuestion';
import FeedbackPanel from './FeedbackPanel';
import ResultsPage from './ResultsPage';
import Timer from './Timer';
import AccessibilityMenu from './AccessibilityMenu';
import { getQuizQuestions, calculateResults } from '@/data/quizData';
import { QuizQuestion as QuizQuestionType, QuizState, QuizResult } from '@/types';

const QuizApp: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>('start');
  const [questions, setQuestions] = useState<QuizQuestionType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: number; isCorrect: boolean }[]>([]);
  const [results, setResults] = useState<QuizResult | null>(null);

  // Start the quiz
  const handleStart = () => {
    const quizQuestions = getQuizQuestions();
    setQuestions(quizQuestions);
    setQuizState('question');
    setIsTimerRunning(true);
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  // Handle answer submission
  const handleAnswer = (questionId: number, option: number, isCorrect: boolean) => {
    setSelectedOption(option);
    setAnswers([...answers, { questionId, isCorrect }]);
    setQuizState('feedback');
    setIsTimerRunning(false);
  };

  // Move to next question or finish quiz
  const handleNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      // End of quiz
      const quizResults = calculateResults(questions, answers);
      quizResults.totalTime = totalTime;
      setResults(quizResults);
      setQuizState('results');
    } else {
      // Next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setQuizState('question');
      setIsTimerRunning(true);
    }
  };

  // Track elapsed time
  const handleTick = useCallback((elapsedTime: number) => {
    setTotalTime(elapsedTime);
  }, []);

  // Restart the quiz
  const handleRestart = () => {
    setQuizState('start');
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setTotalTime(0);
    setAnswers([]);
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-quiz-background py-8 px-4 a11y-adjusted">
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <AccessibilityMenu />
      
      {/* Timer (visible during questions) */}
      {(quizState === 'question' || quizState === 'feedback') && (
        <div className="max-w-3xl mx-auto flex justify-end mb-2">
          <Timer isRunning={isTimerRunning} onTick={handleTick} />
        </div>
      )}
      
      {/* Quiz Content */}
      <main id="main-content">
        {quizState === 'start' && <StartScreen onStart={handleStart} />}
        
        {quizState === 'question' && questions.length > 0 && (
          <QuizQuestion
            question={questions[currentQuestionIndex]}
            currentNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        )}
        
        {quizState === 'feedback' && questions.length > 0 && selectedOption !== null && (
          <div className="max-w-3xl mx-auto">
            <QuizQuestion
              question={questions[currentQuestionIndex]}
              currentNumber={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              onAnswer={() => {}}
            />
            <FeedbackPanel
              question={questions[currentQuestionIndex]}
              selectedOption={selectedOption}
              isCorrect={answers[answers.length - 1]?.isCorrect}
              onNext={handleNext}
            />
          </div>
        )}
        
        {quizState === 'results' && results && (
          <ResultsPage results={results} onRestart={handleRestart} />
        )}
      </main>
    </div>
  );
};

export default QuizApp;
