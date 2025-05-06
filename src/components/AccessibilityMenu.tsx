
import React from 'react';
import { Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle
} from "@/components/ui/dialog";
import AccessibilityPanel from './AccessibilityPanel';

const AccessibilityMenu: React.FC = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-10 h-10 focus:ring-2 focus:ring-offset-2"
            aria-label="Accessibility Settings Menu"
          >
            <Accessibility className="h-5 w-5" aria-hidden="true" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full max-w-full h-full max-h-full p-0" aria-label="Accessibility Settings">
          <DialogTitle className="sr-only">Accessibility Settings</DialogTitle>
          <AccessibilityPanel />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AccessibilityMenu;
