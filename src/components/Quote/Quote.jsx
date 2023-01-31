import React from "react";
import styled from "styled-components";

function Quote({ setViewProject }) {
  const [quotes, setQuotes] = React.useState({
    en: "It is important to our friends to believe that we are unreservedly frank with them, and important to friendship that we are not.",
    author: "Me",
  });

  React.useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = async () => {
    try {
      const response = await fetch(
        "https://programming-quotes-api.herokuapp.com/Quotes/random"
      );
      const { statusCode, statusmessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusmessage}`);
      setQuotes(
        data.en.length > 140
          ? {
              en: "It is important to our friends to believe that we are unreservedly frank with them, and important to friendship that we are not.",
              author: "Me",
            }
          : data
      );
    } catch (e) {
      console.error(e);
      setQuotes({
        en: "It is important to our friends to believe that we are unreservedly frank with them, and important to friendship that we are not.",
        author: "Me",
      });
    }
  };

  return (
    <QuoteMain data-scroll-section>
      <div>
        <span>
          “ <span className="quote">{quotes.en}</span> ”
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
  margin: 10rem 0;
  font-family: "Fondomento Italic";

  div {
    width: 53rem;
    text-align: center;

    span {
      font-size: 1.9rem;
      color: #d1d1d1;
    }

    .author {
      font-size: 1.4rem;
      line-height: 5rem;
      color: #7a7a7a;
      text-align: end;
    }
  }
`;

export default Quote;
