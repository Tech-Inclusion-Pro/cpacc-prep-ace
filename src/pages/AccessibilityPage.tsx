import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAccessibility } from '@/context/AccessibilityContext';
import { 
  ToggleGroup,
  ToggleGroupItem
} from '@/components/ui/toggle-group';

const AccessibilityPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    fontSize,
    fontColor,
    backgroundColor,
    verticalPosition,
    horizontalAlignment,
    setFontSize,
    setFontColor,
    setBackgroundColor,
    setVerticalPosition,
    setHorizontalAlignment
  } = useAccessibility();

  const handleReturnToQuiz = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-quiz-background py-8 px-4 a11y-adjusted">
      <main role="main" className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-center" id="accessibility-heading">Accessibility Settings</h1>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-medium" id="font-size-heading">Font Size</h2>
            <ToggleGroup 
              type="single" 
              value={fontSize} 
              onValueChange={(value) => value && setFontSize(value as any)}
              aria-labelledby="font-size-heading"
              className="justify-start"
            >
              <ToggleGroupItem value="small" aria-label="Small font size">
                Standard
              </ToggleGroupItem>
              <ToggleGroupItem value="medium" aria-label="Medium font size">
                Large
              </ToggleGroupItem>
              <ToggleGroupItem value="large" aria-label="Large font size">
                Extra Large
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-medium" id="font-color-heading">Font Color</h2>
            <ToggleGroup 
              type="single" 
              value={fontColor} 
              onValueChange={(value) => value && setFontColor(value as any)}
              aria-labelledby="font-color-heading"
              className="flex flex-wrap justify-start gap-2"
            >
              <ToggleGroupItem 
                value="black" 
                aria-label="Black text color"
                className="relative"
              >
                <span className="inline-block w-4 h-4 bg-black rounded-full mr-2"></span>
                Black
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="white" 
                aria-label="White text color"
                className="relative"
              >
                <span className="inline-block w-4 h-4 bg-white border border-gray-300 rounded-full mr-2"></span>
                White
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="darkblue" 
                aria-label="Dark blue text color"
                className="relative"
              >
                <span className="inline-block w-4 h-4 bg-[#0EA5E9] rounded-full mr-2"></span>
                Dark Blue
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="darkgreen" 
                aria-label="Dark green text color"
                className="relative"
              >
                <span className="inline-block w-4 h-4 bg-[#166534] rounded-full mr-2"></span>
                Green
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="deepred" 
                aria-label="Deep red text color"
                className="relative"
              >
                <span className="inline-block w-4 h-4 bg-[#ea384c] rounded-full mr-2"></span>
                Red
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-medium" id="background-color-heading">Background Color</h2>
            <ToggleGroup 
              type="single" 
              value={backgroundColor} 
              onValueChange={(value) => value && setBackgroundColor(value as any)}
              aria-labelledby="background-color-heading"
              className="justify-start"
            >
              <ToggleGroupItem 
                value="white" 
                aria-label="White background color"
                className="relative"
              >
                <span className="inline-block w-4 h-4 bg-white border border-gray-300 rounded-full mr-2"></span>
                White
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="lightgray" 
                aria-label="Light gray background color"
                className="relative"
              >
                <span className="inline-block w-4 h-4 bg-[#F1F1F1] rounded-full mr-2"></span>
                Light Gray
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="beige" 
                aria-label="Beige background color"
                className="relative"
              >
                <span className="inline-block w-4 h-4 bg-[#FFF3E0] rounded-full mr-2"></span>
                Beige
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="black" 
                aria-label="Black background color"
                className="relative"
              >
                <span className="inline-block w-4 h-4 bg-black rounded-full mr-2"></span>
                Black
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-medium" id="vertical-position-heading">Question Vertical Position</h2>
            <ToggleGroup 
              type="single" 
              value={verticalPosition} 
              onValueChange={(value) => value && setVerticalPosition(value as any)}
              aria-labelledby="vertical-position-heading"
              className="justify-start"
            >
              <ToggleGroupItem value="top" aria-label="Position content at the top">
                Top
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Position content in the center">
                Center
              </ToggleGroupItem>
              <ToggleGroupItem value="bottom" aria-label="Position content at the bottom">
                Bottom
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-medium" id="horizontal-alignment-heading">Question Horizontal Alignment</h2>
            <ToggleGroup 
              type="single" 
              value={horizontalAlignment} 
              onValueChange={(value) => value && setHorizontalAlignment(value as any)}
              aria-labelledby="horizontal-alignment-heading"
              className="justify-start"
            >
              <ToggleGroupItem value="left" aria-label="Align content to the left">
                Left
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align content to the center">
                Center
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align content to the right">
                Right
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={handleReturnToQuiz}
            className="quiz-button-primary"
            size="lg"
          >
            Return to Quiz
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AccessibilityPage;
