import React, { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

type MathRenderProperties = {
  latex: string;
  inline?: boolean;
};
const MathRenderer = ({ latex, inline }: MathRenderProperties) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      katex.render(latex, containerRef.current, {
        throwOnError: false,
        displayMode: !inline, // Set to false for inline math
      });
    }
  }, [latex, inline]);

  return <div ref={containerRef} />;
};

export default MathRenderer;