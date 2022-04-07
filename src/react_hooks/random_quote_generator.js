import React, { useEffect, useState } from "react";

export default function RandomQuoteGenerator(props) {
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function generateRandomQuote() {
    fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((res) => {
      setQuote(res.content);
      setIsLoading(false);
    });
  }

  function onButtonClick() {
      setIsLoading(true);
      generateRandomQuote();
  }

  useEffect(() => {
    generateRandomQuote();
  }, []);

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <button onClick={onButtonClick}>Fetch New Quote</button>
      <p>{isLoading ? "Loading..." : quote}</p>
    </div>
  );
}
