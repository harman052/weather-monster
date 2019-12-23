import React from "react";

const HighlightMatch = ({ string, userInput }) => {
  return Array.from(str).map(letter => {
    return subStr.toLowerCase().includes(letter.toLowerCase()) ? (
      <strong>letter</strong>
    ) : (
      letter
    );
  });
};

export default HighlightMatch;
