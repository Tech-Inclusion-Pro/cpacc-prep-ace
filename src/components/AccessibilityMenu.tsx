
import React from 'react';
import { Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import AccessibilityPanel from './AccessibilityPanel';

const AccessibilityMenu: React.FC = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-10 h-10 focus:ring-2 focus:ring-offset-2"
            aria-label="Accessibility Settings Menu"
          >
            <Accessibility className="h-5 w-5" aria-hidden="true" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[90%] sm:h-[90%] bg-white">
          <AccessibilityPanel />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AccessibilityMenu;
