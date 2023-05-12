import React, { useState, useEffect, useMemo } from "react";

function Typewriter() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 200; // delay between each character in milliseconds

  const phrases = useMemo(() => ["MERN stack developer", "Full stack developer"], []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => currentIndex + 1);
    }, delay);

    if (currentIndex >= phrases[phraseIndex].length) {
      clearInterval(intervalId);
      setTimeout(() => {
        setCurrentIndex(0);
        setPhraseIndex((phraseIndex) => (phraseIndex + 1) % phrases.length);
      }, 2000); // wait for 2 seconds before switching to the next phrase
    }

    return () => clearInterval(intervalId);
  }, [currentIndex, phraseIndex, phrases]);

  useEffect(() => {
    setText(phrases[phraseIndex].substring(0, currentIndex));
  }, [currentIndex, phraseIndex, phrases]);

  return <h1 className="typewriter">{text}</h1>;
}

export default Typewriter;
