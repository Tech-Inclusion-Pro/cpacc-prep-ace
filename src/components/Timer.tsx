
import React, { useState, useEffect } from 'react';

interface TimerProps {
  isRunning: boolean;
  onTick: (elapsedTime: number) => void;
}

const Timer: React.FC<TimerProps> = ({ isRunning, onTick }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime(prev => {
          const newTime = prev + 1;
          onTick(newTime);
          return newTime;
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, onTick]);

  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="text-lg font-semibold" aria-label="Quiz timer">
      <div className="flex items-center gap-1">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-4 h-4 text-gray-600"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span>{formatTime(elapsedTime)}</span>
      </div>
    </div>
  );
};

export default Timer;
