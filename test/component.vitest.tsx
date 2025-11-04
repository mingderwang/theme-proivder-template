import React from 'react';
import { test, expect } from "vitest";
import { render, screen } from '@testing-library/react';

function Button({ children }: { children: React.ReactNode }) {
  return <button>{children}</button>;
}

test('renders button', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button')).toHaveTextContent('Click me');
});
