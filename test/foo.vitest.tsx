import { test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { MyComponent } from '../src/MyComponent';

test('Can use Testing Library', () => {
  render(<MyComponent/>);
  const myComponent = screen.getByTestId('my-component');
  expect(myComponent).toBeInTheDocument();
  expect(myComponent).toHaveStyle('color: red')
})
