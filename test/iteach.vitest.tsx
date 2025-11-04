import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react';


describe('itEach', () => {
  test.each([
    ['h1', () => <h1 data-testid='h1'>Heading1</h1>],
    ['h2', () => <h2 data-testid='h2'>Heading2</h2>],
    ['h3', () => <h3 data-testid='h3'>Heading3</h3>],
    ['h4', () => <h4 data-testid='h4'>Heading4</h4>],
    ['h5', () => <h5 data-testid='h5'>Heading5</h5>],
    ['h6', () => <h6 data-testid='h6'>Heading6</h6>],
  ])('should apply heading styling for the %p tag', async (tag, Component) => {
    const { container } = render(<Component />);
    expect(container.querySelector(tag)).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
