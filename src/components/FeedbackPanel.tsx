
import React from 'react';
import { Button } from '@/components/ui/button';
import { QuizQuestion } from '@/types';

interface FeedbackPanelProps {
  question: QuizQuestion;
  selectedOption: number;
  isCorrect: boolean;
  onNext: () => void;
}

const FeedbackPanel: React.FC<FeedbackPanelProps> = ({
  question,
  selectedOption,
  isCorrect,
  onNext,
}) => {
  return (
    <div className={`quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
      <div className="mb-4 flex items-center">
        {isCorrect ? (
          <>
            <div className="w-8 h-8 rounded-full bg-quiz-success flex items-center justify-center mr-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-quiz-success">Correct!</h3>
          </>
        ) : (
          <>
            <div className="w-8 h-8 rounded-full bg-quiz-error flex items-center justify-center mr-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-quiz-error">Incorrect</h3>
          </>
        )}
      </div>
      
      <div className="mb-4">
        <h4 className="font-medium mb-2">Explanation:</h4>
        <p className="text-gray-700">
          {isCorrect ? question.explanation : question.incorrectExplanation}
        </p>
      </div>
      
      {!isCorrect && (
        <div className="mb-4">
          <h4 className="font-medium mb-2">The correct answer was:</h4>
          <p className="text-gray-700 font-medium">
            {question.options[question.correctAnswer]}
          </p>
          <p className="text-gray-700 mt-2">
            {question.explanation}
          </p>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <Button 
          onClick={onNext}
          className="quiz-button-primary"
        >
          Next Question
        </Button>
      </div>
    </div>
  );
};

export default FeedbackPanel;
