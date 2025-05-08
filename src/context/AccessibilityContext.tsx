
import React, { createContext, useContext, useState, useEffect } from 'react';

type FontSize = 'small' | 'medium' | 'large';
type FontColor = 'black' | 'darkblue' | 'white' | 'darkgreen' | 'deepred';
type TextAlignment = 'left' | 'center' | 'right';
type BackgroundColor = 'white' | 'lightgray' | 'beige' | 'black';
type VerticalPosition = 'top' | 'center' | 'bottom';
type HorizontalAlignment = 'left' | 'center' | 'right';

interface AccessibilityContextType {
  fontSize: FontSize;
  fontColor: FontColor;
  textAlignment: TextAlignment;
  backgroundColor: BackgroundColor;
  verticalPosition: VerticalPosition;
  horizontalAlignment: HorizontalAlignment;
  setFontSize: (size: FontSize) => void;
  setFontColor: (color: FontColor) => void;
  setTextAlignment: (alignment: TextAlignment) => void;
  setBackgroundColor: (color: BackgroundColor) => void;
  setVerticalPosition: (position: VerticalPosition) => void;
  setHorizontalAlignment: (alignment: HorizontalAlignment) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType>({
  fontSize: 'medium',
  fontColor: 'black',
  textAlignment: 'center',
  backgroundColor: 'white',
  verticalPosition: 'center',
  horizontalAlignment: 'center',
  setFontSize: () => {},
  setFontColor: () => {},
  setTextAlignment: () => {},
  setBackgroundColor: () => {},
  setVerticalPosition: () => {},
  setHorizontalAlignment: () => {},
});

export const useAccessibility = () => useContext(AccessibilityContext);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontSize, setFontSize] = useState<FontSize>('medium');
  const [fontColor, setFontColor] = useState<FontColor>('black');
  const [textAlignment, setTextAlignment] = useState<TextAlignment>('center');
  const [backgroundColor, setBackgroundColor] = useState<BackgroundColor>('white');
  const [verticalPosition, setVerticalPosition] = useState<VerticalPosition>('center');
  const [horizontalAlignment, setHorizontalAlignment] = useState<HorizontalAlignment>('center');

  // Apply styles based on accessibility settings
  useEffect(() => {
    // Apply font size
    document.documentElement.style.setProperty(
      '--font-size-multiplier',
      fontSize === 'small' ? '0.875' : fontSize === 'medium' ? '1' : '1.25'
    );

    // Apply font color
    let textColor;
    switch (fontColor) {
      case 'black':
        textColor = '#000000';
        break;
      case 'darkblue':
        textColor = '#0EA5E9';
        break;
      case 'white':
        textColor = '#FFFFFF';
        break;
      case 'darkgreen':
        textColor = '#166534';
        break;
      case 'deepred':
        textColor = '#ea384c';
        break;
      default:
        textColor = '#000000';
    }
    document.documentElement.style.setProperty('--text-color', textColor);

    // Apply background color
    let bgColor;
    switch (backgroundColor) {
      case 'white':
        bgColor = '#FFFFFF';
        break;
      case 'lightgray':
        bgColor = '#F1F1F1';
        break;
      case 'beige':
        bgColor = '#FFF3E0';
        break;
      case 'black':
        bgColor = '#000000';
        break;
      default:
        bgColor = '#FFFFFF';
    }
    document.documentElement.style.setProperty('--bg-color', bgColor);

    // Apply text alignment
    document.documentElement.style.setProperty('--text-alignment', textAlignment);

    // Add appropriate classes to the body
    document.body.classList.toggle('dark-bg', backgroundColor === 'black');

  }, [fontSize, fontColor, textAlignment, backgroundColor]);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        fontColor,
        textAlignment,
        backgroundColor,
        verticalPosition,
        horizontalAlignment,
        setFontSize,
        setFontColor,
        setTextAlignment,
        setBackgroundColor,
        setVerticalPosition,
        setHorizontalAlignment,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};
