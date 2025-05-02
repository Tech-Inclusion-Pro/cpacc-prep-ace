
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { QuizQuestion } from '@/types';
import { useAccessibility } from '@/context/AccessibilityContext';

interface QuizQuestionProps {
  question: QuizQuestion;
  currentNumber: number;
  totalQuestions: number;
  onAnswer: (questionId: number, selectedOption: number, isCorrect: boolean) => void;
}

const QuizQuestionComponent: React.FC<QuizQuestionProps> = ({
  question,
  currentNumber,
  totalQuestions,
  onAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const { verticalPosition, horizontalAlignment, fontColor, backgroundColor, fontSize } = useAccessibility();

  const handleOptionClick = (index: number) => {
    if (!confirmed) {
      setSelectedOption(index);
    }
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      const isCorrect = selectedOption === question.correctAnswer;
      onAnswer(question.id, selectedOption, isCorrect);
    }
  };

  const getOptionClass = (index: number) => {
    let className = "quiz-option";
    
    if (selectedOption === index) {
      className += " selected custom-border";
    }
    
    return className;
  };

  // Get the border color and background color based on the user's choices
  const getOptionStyle = (index: number) => {
    const styles: React.CSSProperties = {
      backgroundColor: `var(--bg-color)`, // Use the user's selected background color for each option
      fontSize: fontSize === 'large' ? '1.125rem' : fontSize === 'x-large' ? '1.25rem' : '1rem',
    };
    
    if (selectedOption === index) {
      styles.borderColor = `var(--text-color)`;
      styles.borderWidth = '3px';
    }
    
    return styles;
  };

  return (
    <div className="quiz-container animate-fade-in">
      <div className="quiz-position-container" data-vertical={verticalPosition}>
        <div className="quiz-alignment-container" style={{ textAlign: horizontalAlignment as any }}>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-sm text-gray-500">
                Question {currentNumber} of {totalQuestions}
              </span>
              
              {/* Added substantial spacing here */}
              <div className="py-6"></div>
              
              <span className="text-sm px-3 py-1 bg-gray-100 rounded-full text-gray-700">
                {question.category}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6" style={{ fontSize: fontSize === 'large' ? '1.5rem' : fontSize === 'x-large' ? '1.75rem' : '1.25rem' }}>{question.question}</h2>
            
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <div 
                  key={index}
                  className={getOptionClass(index)}
                  onClick={() => handleOptionClick(index)}
                  role="radio"
                  aria-checked={selectedOption === index}
                  tabIndex={0}
                  style={getOptionStyle(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleOptionClick(index);
                    }
                  }}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${
                      selectedOption === index ? 'border-quiz-primary bg-quiz-primary' : 'border-gray-300'
                    }`}>
                      {/* Removed checkmark SVG icon */}
                    </div>
                    <span style={{ fontSize: 'inherit' }}>{option}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {selectedOption !== null && !confirmed && (
            <div className="mt-6 text-center">
              <Button 
                onClick={handleSubmit}
                className="quiz-button-primary"
              >
                Submit Answer
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestionComponent;
