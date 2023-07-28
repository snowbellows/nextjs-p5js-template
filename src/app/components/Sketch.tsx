"use client";

import { createSketch } from "@/sketch";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

function Sketch() {
  const p5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (p5Ref.current) {
      createSketch && createSketch(p5Ref.current);
    }
  });
  return <div ref={p5Ref}></div>;
}
export default dynamic(() => Promise.resolve(Sketch), {
  ssr: false,
});
