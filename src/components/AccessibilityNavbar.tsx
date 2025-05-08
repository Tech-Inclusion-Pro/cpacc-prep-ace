import React from 'react';
import { useAccessibility } from '@/context/AccessibilityContext';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  Palette, 
  Square,
  Text 
} from 'lucide-react';

const AccessibilityNavbar: React.FC = () => {
  const {
    fontSize,
    fontColor,
    textAlignment,
    backgroundColor,
    setFontSize,
    setFontColor,
    setTextAlignment,
    setBackgroundColor,
  } = useAccessibility();

  const getTextLabel = () => {
    switch (fontSize) {
      case 'small': return 'A-';
      case 'medium': return 'A';
      case 'large': return 'A+';
    }
  };

  return (
    <nav className="p-2 bg-background" aria-label="Accessibility options">
      <div className="max-w-screen-xl mx-auto flex justify-center gap-2 flex-wrap">
        {/* Font Size Button */}
        <Popover>
          <PopoverTrigger asChild>
            <Button 
              variant="outline" 
              aria-label="Change font size" 
              className="flex items-center gap-1"
            >
              <Text className="h-4 w-4" />
              <span>{getTextLabel()}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48">
            <div className="grid gap-2">
              <h4 className="font-medium mb-1">Font Size</h4>
              <Button 
                variant={fontSize === 'small' ? 'default' : 'outline'} 
                className="justify-start"
                onClick={() => setFontSize('small')}
              >
                Small
              </Button>
              <Button 
                variant={fontSize === 'medium' ? 'default' : 'outline'} 
                className="justify-start"
                onClick={() => setFontSize('medium')}
              >
                Medium (Default)
              </Button>
              <Button 
                variant={fontSize === 'large' ? 'default' : 'outline'} 
                className="justify-start"
                onClick={() => setFontSize('large')}
              >
                Large
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {/* Font Color Button */}
        <Popover>
          <PopoverTrigger asChild>
            <Button 
              variant="outline" 
              aria-label="Change font color"
              className="flex items-center gap-1"
            >
              <Palette className="h-4 w-4" />
              <span>Font Color</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48">
            <div className="grid gap-2">
              <h4 className="font-medium mb-1">Font Color</h4>
              <Button 
                variant={fontColor === 'black' ? 'default' : 'outline'} 
                className="justify-start"
                onClick={() => setFontColor('black')}
              >
                <div className="w-4 h-4 bg-black rounded-full mr-2"></div>
                Black
              </Button>
              <Button 
                variant={fontColor === 'darkblue' ? 'default' : 'outline'} 
                className="justify-start"
                onClick={() => setFontColor('darkblue')}
              >
                <div className="w-4 h-4 bg-[#0EA5E9] rounded-full mr-2"></div>
                Dark Blue
              </Button>
              <Button 
                variant={fontColor === 'white' ? 'default' : 'outline'} 
                className="justify-start"
                onClick={() => setFontColor('white')}
              >
                <div className="w-4 h-4 bg-white border border-gray-300 rounded-full mr-2"></div>
                White
              </Button>
              <Button 
                variant={fontColor === 'darkgreen' ? 'default' : 'outline'} 
                className="justify-start"
                onClick={() => setFontColor('darkgreen')}
              >
                <div className="w-4 h-4 bg-[#166534] rounded-full mr-2"></div>
                Dark Green
              </Button>
              <Button 
                variant={fontColor === 'deepred' ? 'default' : 'outline'} 
                className="justify-start"
                onClick={() => setFontColor('deepred')}
              >
                <div className="w-4 h-4 bg-[#ea384c] rounded-full mr-2"></div>
                Deep Red
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {/* Text Alignment Button */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              aria-label="Change text alignment"
              className="flex items-center gap-1"
            >
              {textAlignment === 'left' && <AlignLeft className="h-4 w-4" />}
              {textAlignment === 'center' && <AlignCenter className="h-4 w-4" />}
              {textAlignment === 'right' && <AlignRight className="h-4 w-4" />}
              <span>Align</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setTextAlignment('left')}>
              <AlignLeft className="h-4 w-4 mr-2" />
              Left
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTextAlignment('center')}>
              <AlignCenter className="h-4 w-4 mr-2" />
              Center
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTextAlignment('right')}>
              <AlignRight className="h-4 w-4 mr-2" />
              Right
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Background Color Button */}
        <Popover>
          <PopoverTrigger asChild>
            <Button 
              variant="outline" 
              aria-label="Change background color"
              className="flex items-center gap-1"
            >
              <Square className="h-4 w-4" />
              <span>Background</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48">
            <div className="grid gap-2">
              <h4 className="font-medium mb-1">Background Color</h4>
              <Button 
                variant={backgroundColor === 'white' ? 'default' : 'outline'} 
                className="justify-start"
                onClick={() => setBackgroundColor('white')}
              >
                <div className="w-4 h-4 bg-white border border-gray-300 rounded-full mr-2"></div>
                White
              </Button>
              <Button 
                variant={backgroundColor === 'lightgray' ? 'default' : 'outline'} 
                className="justify-start"
                onClick={() => setBackgroundColor('lightgray')}
              >
                <div className="w-4 h-4 bg-[#F1F1F1] border border-gray-300 rounded-full mr-2"></div>
                Light Gray
              </Button>
              <Button 
                variant={backgroundColor === 'beige' ? 'default' : 'outline'} 
                className="justify-start"
                onClick={() => setBackgroundColor('beige')}
              >
                <div className="w-4 h-4 bg-[#FFF3E0] border border-gray-300 rounded-full mr-2"></div>
                Beige
              </Button>
              <Button 
                variant={backgroundColor === 'black' ? 'default' : 'outline'} 
                className="justify-start"
                onClick={() => setBackgroundColor('black')}
              >
                <div className="w-4 h-4 bg-black rounded-full mr-2"></div>
                Black
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};

export default AccessibilityNavbar;
