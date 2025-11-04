import { render, screen, fireEvent } from "@testing-library/react";
import { useState } from "react";
import { describe, it, expect } from "vitest";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p data-testid="count">{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}

describe("Counter", () => {
  it("increments the count when clicked", () => {
    render(<Counter />);
    const button = screen.getByText("Increment");
    fireEvent.click(button);
    expect(screen.getByTestId("count")).toHaveTextContent("1");
  });
});

