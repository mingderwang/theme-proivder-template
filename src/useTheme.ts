import { useContext } from 'react';
import { type ThemeContextValue, ThemeContext } from './ThemeProvider';

export function useTheme() {
  const ctx = useContext(ThemeContext) as ThemeContextValue;
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}