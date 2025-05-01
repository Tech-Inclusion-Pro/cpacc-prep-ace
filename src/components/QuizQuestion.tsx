
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { QuizQuestion } from '@/types';

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
      className += " selected";
    }
    
    return className;
  };

  return (
    <div className="quiz-container animate-fade-in">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">
            Question {currentNumber} of {totalQuestions}
          </span>
          <span className="text-sm px-3 py-1 bg-gray-100 rounded-full text-gray-700">
            {question.category}
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">{question.question}</h2>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <div 
              key={index}
              className={getOptionClass(index)}
              onClick={() => handleOptionClick(index)}
              role="radio"
              aria-checked={selectedOption === index}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleOptionClick(index);
                }
              }}
            >
              <div className="flex items-center">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${
                  selectedOption === index ? 'border-quiz-primary bg-quiz-primary text-white' : 'border-gray-300'
                }`}>
                  {selectedOption === index && (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span>{option}</span>
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
  );
};

export default QuizQuestionComponent;
