
import React from 'react';
import { Button } from '@/components/ui/button';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="quiz-container animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">CPACC Practice Quiz</h1>
        <div className="h-1 w-20 bg-quiz-secondary mx-auto mb-6"></div>
      </div>
      
      <div className="space-y-6 mb-10">
        <p className="text-gray-700">
          This quiz consists of 20 randomized questions based on the IAAP CPACC Body of Knowledge. 
          The quiz will be timed (via stopwatch in the top right), but there is no time limit.
        </p>
        
        <p className="text-gray-700">
          After each question, you'll receive immediate feedback. Once you've read the feedback, 
          click "Next Question" to continue, at which point the timer resumes. 
        </p>
        
        <p className="text-gray-700">
          At the end, you'll receive a report summarizing your performance across three content areas:
        </p>
        
        <ul className="list-disc pl-8 text-gray-700">
          <li>Disabilities, Challenges, and Assistive Technologies</li>
          <li>Accessibility and Universal Design</li>
          <li>Standards, Laws, and Management Strategies</li>
        </ul>
        
        <div className="bg-blue-50 border-l-4 border-quiz-primary p-4 mt-6">
          <h2 className="font-semibold text-gray-800 mb-2">How to take the quiz:</h2>
          <p className="text-gray-700">
            Click anywhere on an answer choice to select it. You will then be asked to confirm your selection
            before submitting.
          </p>
        </div>
      </div>
      
      <div className="text-center">
        <Button 
          onClick={onStart}
          className="quiz-button-secondary text-lg px-10 py-6"
        >
          START
        </Button>
      </div>
    </div>
  );
};

export default StartScreen;
