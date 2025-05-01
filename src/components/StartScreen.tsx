
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAccessibility } from '@/context/AccessibilityContext';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const { verticalPosition, horizontalAlignment } = useAccessibility();

  return (
    <div className="max-w-3xl mx-auto quiz-container animate-fade-in">
      <div className="quiz-position-container" data-vertical={verticalPosition}>
        <div className="quiz-alignment-container" style={{ textAlign: horizontalAlignment as any }}>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">CPACC Practice Quiz</h1>
          <div className="h-1 w-20 bg-quiz-secondary mx-auto mb-8"></div>

          <div className="prose mx-auto text-left">
            <p className="mb-4 text-lg">
              This quiz consists of 20 randomized questions based on the IAAP CPACC Body of Knowledge. 
              The quiz will be timed but there is no time limit. After each question, you'll receive 
              immediate feedback. Once you read the feedback, click "Next Question" to continue.
            </p>

            <p className="mb-4 text-lg">
              The quiz gives a report at the end summarizing your performance across three content areas:
            </p>

            <ul className="list-disc pl-8 mb-6 text-lg space-y-2">
              <li>Disabilities, Challenges, and Assistive Technologies</li>
              <li>Accessibility and Universal Design</li>
              <li>Standards, Laws, and Management Strategies</li>
            </ul>

            <h2 className="text-xl font-semibold mb-3">How to Take the Quiz</h2>
            <p className="mb-4 text-lg">
              Click anywhere on an answer choice to select it. You will be asked to confirm your 
              selection before submitting.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-lg">
                <strong>Accessibility Options:</strong> Need a different visual setup? Click the 
                Accessibility button at the top right of the screen to adjust font size, colors, 
                or change positioning.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Button 
              onClick={onStart}
              className="quiz-button-primary bg-quiz-secondary hover:bg-quiz-secondary/90 text-white px-8 py-3 text-lg"
              size="lg"
            >
              START
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
