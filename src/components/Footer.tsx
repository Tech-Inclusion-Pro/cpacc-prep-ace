
import React from 'react';
import AccessibilityNavbar from './AccessibilityNavbar';

const Footer: React.FC = () => {
  return (
    <footer className="border-t mt-auto">
      <div className="py-4 px-4 text-center text-xs text-gray-600">
        <p>
          Created by Rocco Catrone, PhD, BCBA-D, CPACC
          <br />
          Intellectual property of Tech Inclusion Pro LLC
        </p>
      </div>
      <div className="border-t">
        <AccessibilityNavbar />
      </div>
    </footer>
  );
};

export default Footer;
