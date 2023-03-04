import React from "react";
import styled from "styled-components";

function Quote({ setViewProject }) {
  const [quotes, setQuotes] = React.useState({
    content: "It is important to our friends to believe that we are unreservedly frank with them, and important to friendship that we are not.",
    author: "Unknown!",
  });

  React.useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = async () => {
    try {
      const response = await fetch(
        "https://api.quotable.io/random"
      );
      const { content, author } = await response.json();
      if (!response.ok) throw new Error("Error found!");
      setQuotes(
        {
          content: content,
          author: author,
        }
      );
    } catch (e) {
      console.error(e);
      setQuotes({
        content: "It is important to our friends to believe that we are unreservedly frank with them, and important to friendship that we are not.",
        author: "Unknown!",
      });
    }
  };

  return (
    <QuoteMain data-scroll-section>
      <div>
        <span>
          “ <span className="quote">{quotes.content}</span> ”
        </span>

        <p className="author">— {quotes.author}</p>
      </div>
    </QuoteMain>
  );
}

const QuoteMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Made Bon Voyage Regular";

  div {
    width: 50%;
    text-align: center;

    span {
      font-size: 2.5rem;
      color: #d1d1d1;
    }

    .author {
      font-size: 1.5rem;
      line-height: 5rem;
      color: #7a7a7a;
      text-align: end;
    }
  }
`;

export default Quote;
