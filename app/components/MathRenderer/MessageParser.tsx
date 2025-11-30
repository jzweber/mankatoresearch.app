import React from 'react';
import MathRenderer from './MathRenderer'; // Adjust path as needed

const MessageParser = ({ content }: { content: string }) => {

  //for splitting by $$ first to handle block math
  const parts = content.split(/(\$\$[\s\S]*?\$\$)/g);

  return (
    <span>
      {parts.map((part, index) => {
        // Check for Block Math ($$ ... $$)
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const latex = part.slice(2, -2); // Remove $$
          return <MathRenderer key={index} latex={latex} inline={false} />;
        }

        // Handle Inline Math and Text within the remaining parts
        const subParts = part.split(/(\$[\s\S]*?\$)/g);
        
        return subParts.map((subPart, subIndex) => {
          if (subPart.startsWith('$') && subPart.endsWith('$')) {
            const latex = subPart.slice(1, -1);
            return <MathRenderer key={`${index}-${subIndex}`} latex={latex} inline={true} />;
          }
          
          // Return regular text
          return <span key={`${index}-${subIndex}`}>{subPart}</span>;
        });
      })}
    </span>
  );
};

export default MessageParser;