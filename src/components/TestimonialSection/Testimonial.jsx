import React from "react";
import styled from "styled-components";

const Testimonial = ({ setViewProject }) => {
  return (
    <Main data-scroll-section>
      <div
        className="upperText"
        onMouseEnter={() => {
          setViewProject("invert-cursor");
        }}
        onMouseLeave={() => {
          setViewProject(false);
        }}
      >
        <span>
          What client's think{" "}
          <span className="semi">
            about <span className="bold">me?</span>
          </span>
        </span>
        <span>
          What my clients think about me and my work, when i ask them to give a
          honest opinion!
        </span>
      </div>
      <div
        className="reviews"
        onMouseEnter={() => {
          setViewProject("invert-cursor");
        }}
        onMouseLeave={() => {
          setViewProject(false);
        }}
      >
        <span>
          “{" "}
          <span className="currentText">
            Working with Kushal was the best Experience of my life, he even
            helped me with the server side stuff without any extra charges.
          </span>{" "}
          ”
        </span>

        <p className="client">— My Subordinate</p>
      </div>
      <div className="bullets">
        <span className="inactive">1</span> — <span className="active">2</span>{" "}
        — <span className="inactive">3</span>
      </div>
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .upperText {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;

    span:nth-child(1) {
      font-family: "Gilroy Thin";
      font-size: 2rem;
      margin-bottom: 0.7rem;

      span {
        font-family: "Gilroy Regular";

        span {
          font-family: "Gilroy Medium";
        }
      }
    }

    span:nth-child(2) {
      font-family: "Gilroy Thin";
      font-size: 1.2rem;
    }
  }

  .reviews {
    width: 53rem;
    text-align: center;
    font-family: "Fondomento Italic";
    font-size: 1.7rem;

    span {
      color: #d1d1d1;
    }

    .client {
      font-size: 1.4rem;
      line-height: 5rem;
      color: #7a7a7a;
      text-align: end;
    }
  }

  .bullets {
    font-family: "Gilroy Thin";
    font-size: 1.4rem;
    position: relative;
    top: 6rem;

    .active {
      font-family: "Gilroy Regular";
    }
  }
`;
export default Testimonial;
