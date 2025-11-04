import { expect } from "bun:test";
import * as matchers from "@testing-library/jest-dom/matchers";
import { JSDOM } from "jsdom";
import "@testing-library/jest-dom";

// Setup a global DOM
const dom = new JSDOM("<!doctype html><html><body></body></html>");
(globalThis as any).window = dom.window;
(globalThis as any).document = dom.window.document;
(globalThis as any).navigator = dom.window.navigator;

// Extend expect with jest-dom matchers
expect.extend(matchers as any);
