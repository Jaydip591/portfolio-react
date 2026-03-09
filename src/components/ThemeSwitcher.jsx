import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Palette, Check } from 'lucide-react';

const themes = [
  { id: 'cyan', name: 'Neon Cyan', color: '#06b6d4', class: '' },
  { id: 'purple', name: 'Vivid Purple', color: '#a855f7', class: 'purple' },
  { id: 'emerald', name: 'Emerald Green', color: '#10b981', class: 'emerald' },
  { id: 'light', name: 'Snow White', color: '#ffffff', class: 'light' },
];

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('cyan');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'cyan';
    setTheme(savedTheme);
  }, []);

  const setTheme = (themeId) => {
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;

    document.documentElement.setAttribute('data-theme', theme.class);
    setCurrentTheme(themeId);
    localStorage.setItem('portfolio-theme', themeId);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-16 right-0 mb-2 p-2 glass rounded-2xl min-w-[180px] shadow-2xl border-white/10"
          >
            <div className="px-3 py-2 border-b border-white/10 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Select Theme</span>
            </div>
            <div className="space-y-1">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setTheme(theme.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all ${
                    currentTheme === theme.id ? 'bg-primary/20 text-primary' : 'hover:bg-white/5 text-muted-foreground'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-3 h-3 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)]" 
                      style={{ backgroundColor: theme.color, border: theme.id === 'light' ? '1px solid #e2e8f0' : 'none' }}
                    />
                    <span className="text-sm font-medium">{theme.name}</span>
                  </div>
                  {currentTheme === theme.id && <Check size={14} />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-[0_0_20px_rgb(var(--color-primary)/30%)] hover:shadow-[0_0_30px_rgb(var(--color-primary)/50%)] transition-all"
      >
        {currentTheme === 'light' ? <Sun size={24} /> : <Palette size={24} />}
      </motion.button>
    </div>
  );
};

export default ThemeSwitcher;
