
import React from 'react';
import { Accessibility } from 'lucide-react';
import { useAccessibility } from '@/context/AccessibilityContext';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  ToggleGroup,
  ToggleGroupItem
} from '@/components/ui/toggle-group';

const AccessibilityMenu: React.FC = () => {
  const {
    fontSize,
    colorMode,
    fontColor,
    backgroundColor,
    setFontSize,
    setColorMode,
    setFontColor,
    setBackgroundColor
  } = useAccessibility();

  return (
    <div className="fixed top-4 right-4 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-10 h-10 focus:ring-2 focus:ring-offset-2"
            aria-label="Accessibility Settings Menu"
            aria-haspopup="true"
          >
            <Accessibility className="h-5 w-5" aria-hidden="true" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" aria-label="Accessibility options">
          <div className="space-y-4 p-2">
            <h2 className="text-lg font-medium" id="accessibility-heading">Accessibility Settings</h2>
            <p className="text-sm text-muted-foreground">
              Need a different visual setup? Adjust font size, colors, or enable dark mode.
            </p>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium" id="font-size-heading">Font Size</h3>
              <ToggleGroup 
                type="single" 
                value={fontSize} 
                onValueChange={(value) => value && setFontSize(value as any)}
                aria-labelledby="font-size-heading"
              >
                <ToggleGroupItem value="default" aria-label="Default font size">
                  Default
                </ToggleGroupItem>
                <ToggleGroupItem value="large" aria-label="Large font size">
                  Large
                </ToggleGroupItem>
                <ToggleGroupItem value="x-large" aria-label="Extra large font size">
                  X-Large
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium" id="color-mode-heading">Color Mode</h3>
              <ToggleGroup 
                type="single" 
                value={colorMode} 
                onValueChange={(value) => value && setColorMode(value as any)}
                aria-labelledby="color-mode-heading"
              >
                <ToggleGroupItem value="light" aria-label="Light mode">
                  Light
                </ToggleGroupItem>
                <ToggleGroupItem value="dark" aria-label="Dark mode">
                  Dark
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium" id="font-color-heading">Font Color</h3>
              <ToggleGroup 
                type="single" 
                value={fontColor} 
                onValueChange={(value) => value && setFontColor(value as any)}
                aria-labelledby="font-color-heading"
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
              </ToggleGroup>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium" id="background-color-heading">Background Color</h3>
              <ToggleGroup 
                type="single" 
                value={backgroundColor} 
                onValueChange={(value) => value && setBackgroundColor(value as any)}
                aria-labelledby="background-color-heading"
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
              </ToggleGroup>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default AccessibilityMenu;
