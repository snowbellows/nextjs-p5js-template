/* eslint-disable @typescript-eslint/no-var-requires */
"use client";

export const createSketch = (function createSketchFactory() {
  // This is all required to avoid SSR compile errors
  if (typeof window !== "undefined") {
    const _ = require("radash");
    const p5 = require("p5");

    const sketch = (p: typeof p5) => {
      p.setup = () => {
        // Run at start
        p.createCanvas(window.innerWidth, window.innerHeight);
      };

      p.draw = () => {
        // Runs every frame
        p.circle(50, 50, 50);
      };
    };

    return function createSketch(ref: HTMLDivElement) {
      new p5(sketch, ref);
    };
  } else {
    return null;
  }
})();
