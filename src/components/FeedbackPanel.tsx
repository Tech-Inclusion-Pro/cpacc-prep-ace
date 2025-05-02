
import React from 'react';
import { Button } from '@/components/ui/button';
import { QuizQuestion } from '@/types';
import { useAccessibility } from '@/context/AccessibilityContext';

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
  const { fontSize, backgroundColor } = useAccessibility();
  
  return (
    <div 
      className={`quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`} 
      role="region" 
      aria-label="Answer feedback"
      style={{ backgroundColor: `var(--bg-color)` }}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2" style={{ fontSize: fontSize === 'large' ? '1.25rem' : fontSize === 'x-large' ? '1.5rem' : '1.125rem' }}>
          {isCorrect ? "Correct!" : "Incorrect"}
        </h3>
        
        <div className="mb-4">
          <h4 className="font-medium mb-2" style={{ fontSize: fontSize === 'large' ? '1.125rem' : fontSize === 'x-large' ? '1.25rem' : '1rem' }}>Explanation:</h4>
          <p className="text-gray-700" style={{ fontSize: fontSize === 'large' ? '1rem' : fontSize === 'x-large' ? '1.125rem' : '0.875rem' }}>
            {isCorrect ? question.explanation : question.incorrectExplanation}
          </p>
        </div>
        
        {!isCorrect && (
          <div className="mb-4">
            <h4 className="font-medium mb-2" style={{ fontSize: fontSize === 'large' ? '1.125rem' : fontSize === 'x-large' ? '1.25rem' : '1rem' }}>The correct answer was:</h4>
            <p className="text-gray-700 font-medium" style={{ fontSize: fontSize === 'large' ? '1rem' : fontSize === 'x-large' ? '1.125rem' : '0.875rem' }}>
              {question.options[question.correctAnswer]}
            </p>
            <p className="text-gray-700 mt-2" style={{ fontSize: fontSize === 'large' ? '1rem' : fontSize === 'x-large' ? '1.125rem' : '0.875rem' }}>
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
