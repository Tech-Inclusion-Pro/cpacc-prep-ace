
import React, { createContext, useContext, useState, useEffect } from 'react';

type FontSize = 'default' | 'large' | 'x-large';
type ColorMode = 'light' | 'dark';
type FontColor = 'black' | 'white' | 'yellow' | 'red' | 'blue' | 'green' | 'gold';
type BackgroundColor = 'white' | 'dark-gray' | 'pale-blue' | 'black' | 'light-grey';
type VerticalPosition = 'top' | 'center' | 'bottom';
type HorizontalAlignment = 'left' | 'center' | 'right';

interface AccessibilityContextType {
  fontSize: FontSize;
  colorMode: ColorMode;
  fontColor: FontColor;
  backgroundColor: BackgroundColor;
  verticalPosition: VerticalPosition;
  horizontalAlignment: HorizontalAlignment;
  setFontSize: (size: FontSize) => void;
  setColorMode: (mode: ColorMode) => void;
  setFontColor: (color: FontColor) => void;
  setBackgroundColor: (color: BackgroundColor) => void;
  setVerticalPosition: (position: VerticalPosition) => void;
  setHorizontalAlignment: (alignment: HorizontalAlignment) => void;
}

const defaultAccessibilityContext: AccessibilityContextType = {
  fontSize: 'default',
  colorMode: 'light',
  fontColor: 'black',
  backgroundColor: 'white',
  verticalPosition: 'top',
  horizontalAlignment: 'center',
  setFontSize: () => {},
  setColorMode: () => {},
  setFontColor: () => {},
  setBackgroundColor: () => {},
  setVerticalPosition: () => {},
  setHorizontalAlignment: () => {},
};

const AccessibilityContext = createContext<AccessibilityContextType>(defaultAccessibilityContext);

export const useAccessibility = () => useContext(AccessibilityContext);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontSize, setFontSize] = useState<FontSize>('default');
  const [colorMode, setColorMode] = useState<ColorMode>('light');
  const [fontColor, setFontColor] = useState<FontColor>('black');
  const [backgroundColor, setBackgroundColor] = useState<BackgroundColor>('white');
  const [verticalPosition, setVerticalPosition] = useState<VerticalPosition>('top');
  const [horizontalAlignment, setHorizontalAlignment] = useState<HorizontalAlignment>('center');

  // Apply styles based on accessibility settings
  useEffect(() => {
    document.documentElement.style.setProperty('--font-size-multiplier', 
      fontSize === 'default' ? '1' : fontSize === 'large' ? '1.25' : '1.5');
    
    document.documentElement.classList.toggle('dark-mode', colorMode === 'dark');
    
    // Set text color based on fontColor
    let textColor = '';
    switch (fontColor) {
      case 'black': textColor = '#000000'; break;
      case 'white': textColor = '#FFFFFF'; break;
      case 'yellow': textColor = '#FEF7CD'; break;
      case 'red': textColor = '#e53e3e'; break;
      case 'blue': textColor = '#3182ce'; break;
      case 'green': textColor = '#38a169'; break;
      case 'gold': textColor = '#ecc94b'; break;
    }
    document.documentElement.style.setProperty('--text-color', textColor);
    document.documentElement.style.setProperty('--border-color', textColor);
    
    // Set background color based on backgroundColor
    let bgColor = '';
    switch (backgroundColor) {
      case 'white': bgColor = '#FFFFFF'; break;
      case 'dark-gray': bgColor = '#333333'; break;
      case 'pale-blue': bgColor = '#D3E4FD'; break;
      case 'black': bgColor = '#000000'; break;
      case 'light-grey': bgColor = '#F5F5F5'; break;
    }
    document.documentElement.style.setProperty('--bg-color', bgColor);
    
    // Set vertical position
    document.documentElement.style.setProperty('--vertical-position', verticalPosition);
    
    // Set horizontal alignment
    document.documentElement.style.setProperty('--horizontal-alignment', horizontalAlignment);
    
  }, [fontSize, colorMode, fontColor, backgroundColor, verticalPosition, horizontalAlignment]);

  return (
    <AccessibilityContext.Provider value={{
      fontSize,
      colorMode,
      fontColor,
      backgroundColor,
      verticalPosition,
      horizontalAlignment,
      setFontSize,
      setColorMode,
      setFontColor,
      setBackgroundColor,
      setVerticalPosition,
      setHorizontalAlignment
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
