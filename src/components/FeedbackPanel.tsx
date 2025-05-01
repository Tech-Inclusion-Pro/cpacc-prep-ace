
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
    <div className={`quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`} role="region" aria-label="Answer feedback">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">
          {isCorrect ? "Correct!" : "Incorrect"}
        </h3>
        
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
      </div>
      
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
