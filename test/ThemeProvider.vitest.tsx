/// <reference types="react" />
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from "vitest";
import { ThemeProvider, useTheme } from '../src';

function Consumer() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
}

describe('ThemeProvider', () => {

  it('defaults to light and toggles correctly', async () => {
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme').textContent).toBe('light');

    fireEvent.click(screen.getByRole('button', { name: /toggle/i }));
    expect(screen.getByTestId('theme').textContent).toBe('dark');

    fireEvent.click(screen.getByRole('button', { name: /toggle/i }));
    expect(screen.getByTestId('theme').textContent).toBe('light');
  });

  it('accepts initialTheme prop', () => {
    render(
      <ThemeProvider initialTheme="dark">
        <Consumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme').textContent).toBe('dark');
  }
  );
})
