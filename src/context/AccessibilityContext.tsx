
import React, { createContext, useContext, useState, useEffect } from 'react';

type FontSize = 'default' | 'large' | 'x-large';
type ColorMode = 'light' | 'dark';
type FontColor = 'black' | 'white' | 'yellow';
type BackgroundColor = 'white' | 'dark-gray' | 'pale-blue';

interface AccessibilityContextType {
  fontSize: FontSize;
  colorMode: ColorMode;
  fontColor: FontColor;
  backgroundColor: BackgroundColor;
  setFontSize: (size: FontSize) => void;
  setColorMode: (mode: ColorMode) => void;
  setFontColor: (color: FontColor) => void;
  setBackgroundColor: (color: BackgroundColor) => void;
}

const defaultAccessibilityContext: AccessibilityContextType = {
  fontSize: 'default',
  colorMode: 'light',
  fontColor: 'black',
  backgroundColor: 'white',
  setFontSize: () => {},
  setColorMode: () => {},
  setFontColor: () => {},
  setBackgroundColor: () => {},
};

const AccessibilityContext = createContext<AccessibilityContextType>(defaultAccessibilityContext);

export const useAccessibility = () => useContext(AccessibilityContext);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontSize, setFontSize] = useState<FontSize>('default');
  const [colorMode, setColorMode] = useState<ColorMode>('light');
  const [fontColor, setFontColor] = useState<FontColor>('black');
  const [backgroundColor, setBackgroundColor] = useState<BackgroundColor>('white');

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
    }
    document.documentElement.style.setProperty('--text-color', textColor);
    
    // Set background color based on backgroundColor
    let bgColor = '';
    switch (backgroundColor) {
      case 'white': bgColor = '#FFFFFF'; break;
      case 'dark-gray': bgColor = '#333333'; break;
      case 'pale-blue': bgColor = '#D3E4FD'; break;
    }
    document.documentElement.style.setProperty('--bg-color', bgColor);
    
  }, [fontSize, colorMode, fontColor, backgroundColor]);

  return (
    <AccessibilityContext.Provider value={{
      fontSize,
      colorMode,
      fontColor,
      backgroundColor,
      setFontSize,
      setColorMode,
      setFontColor,
      setBackgroundColor
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
