import React from 'react';
import { Button } from '@/components/ui/button';
import { useAccessibility } from '@/context/AccessibilityContext';
import { 
  ToggleGroup,
  ToggleGroupItem
} from '@/components/ui/toggle-group';
import { DialogClose } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

const AccessibilityPanel: React.FC = () => {
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

  return (
    <ScrollArea className="h-full w-full">
      <div className="p-8" role="dialog" aria-modal="true">
        <h1 className="text-3xl font-bold mb-8 text-center" id="accessibility-heading">Accessibility Settings</h1>
        
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-xl font-medium" id="font-size-heading">Font Size</h2>
            <ToggleGroup 
              type="single" 
              value={fontSize} 
              onValueChange={(value) => value && setFontSize(value as any)}
              aria-labelledby="font-size-heading"
              className="justify-start"
            >
              <ToggleGroupItem value="default" aria-label="Default font size">
                Standard
              </ToggleGroupItem>
              <ToggleGroupItem value="large" aria-label="Large font size">
                Large
              </ToggleGroupItem>
              <ToggleGroupItem value="x-large" aria-label="Extra large font size">
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
                value="yellow" 
                aria-label="Yellow text color"
                className="relative"
              >
                <span className="inline-block w-4 h-4 bg-[#FEF7CD] rounded-full mr-2"></span>
                Yellow
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="red" 
                aria-label="Red text color"
                className="relative"
              >
                <span className="inline-block w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                Red
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="blue" 
                aria-label="Blue text color"
                className="relative"
              >
                <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                Blue
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="green" 
                aria-label="Green text color"
                className="relative"
              >
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                Green
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="gold" 
                aria-label="Gold text color"
                className="relative"
              >
                <span className="inline-block w-4 h-4 bg-yellow-400 rounded-full mr-2"></span>
                Gold
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
                value="dark-gray" 
                aria-label="Dark gray background color"
                className="relative"
              >
                <span className="inline-block w-4 h-4 bg-[#333333] rounded-full mr-2"></span>
                Dark Gray
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="pale-blue" 
                aria-label="Pale blue background color"
                className="relative"
              >
                <span className="inline-block w-4 h-4 bg-[#D3E4FD] rounded-full mr-2"></span>
                Pale Blue
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="black" 
                aria-label="Black background color"
                className="relative"
              >
                <span className="inline-block w-4 h-4 bg-black rounded-full mr-2"></span>
                Black
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="light-grey" 
                aria-label="Light grey background color"
                className="relative"
              >
                <span className="inline-block w-4 h-4 bg-[#F5F5F5] rounded-full mr-2"></span>
                Light Grey
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
        
        <div className="mt-12 text-center pb-8">
          <DialogClose asChild>
            <Button 
              className="quiz-button-primary"
              size="lg"
            >
              Return to Quiz
            </Button>
          </DialogClose>
        </div>
      </div>
    </ScrollArea>
  );
};

export default AccessibilityPanel;
