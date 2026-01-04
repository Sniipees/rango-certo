import React from 'react';
import { View } from '../types';

interface IconProps {
  name: string;
  className?: string;
  filled?: boolean;
}

export const Icon: React.FC<IconProps> = ({ name, className = "", filled = false }) => (
  <span className={`material-symbols-outlined ${filled ? 'filled' : ''} ${className}`}>
    {name}
  </span>
);

interface BottomNavProps {
  currentView: View;
  onChange: (view: View) => void;
  theme?: 'orange' | 'red';
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentView, onChange, theme = 'orange' }) => {
  const activeColor = theme === 'red' ? 'text-primary-red' : 'text-primary';
  const inactiveColor = 'text-gray-400 dark:text-gray-500';

  const navItems = [
    { view: View.HOME, icon: 'home', label: 'Home' },
    { view: View.DETAILS, icon: 'explore', label: 'Discover' }, // Details/Discover mapping
    { view: View.ORDERS, icon: 'receipt_long', label: 'Orders' },
    { view: View.PROFILE, icon: 'person', label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-lg border-t border-gray-100 dark:border-white/5 max-w-md mx-auto pb-safe">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = currentView === item.view || (item.view === View.DETAILS && currentView === View.TRACKING); // Keep discover active for sub-views if needed
          return (
            <button
              key={item.view}
              onClick={() => onChange(item.view)}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
                isActive ? activeColor : inactiveColor
              } hover:${theme === 'red' ? 'text-primary-red' : 'text-primary'}`}
            >
              <Icon name={item.icon} filled={isActive} className="text-[26px]" />
              <span className={`text-[10px] font-medium ${isActive ? 'font-bold' : ''}`}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
