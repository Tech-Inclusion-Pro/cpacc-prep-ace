
import React from 'react';
import { Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AccessibilityMenu: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/accessibility');
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full w-10 h-10 focus:ring-2 focus:ring-offset-2"
        aria-label="Accessibility Settings Menu"
        onClick={handleClick}
      >
        <Accessibility className="h-5 w-5" aria-hidden="true" />
      </Button>
    </div>
  );
};

export default AccessibilityMenu;
