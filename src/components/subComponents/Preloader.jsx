import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap, Expo } from "gsap";

const Preloader = () => {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(".loader-wrap span", {
      fontSize: "0vw",
      letterSpacing: "0rem"
    }).to(".loader-wrap span", {
      duration: 1,
      fontSize: "8vw",
      letterSpacing: "1.5rem",
      ease: Expo.easeInOut
    }).to(".loader-wrap p", {
      duration: 1,
      delay: -0.5,
      opacity: 100,
      ease: Expo.easeInOut
    }).to(".loader-wrap .text-wrap", {
      delay: 1,
      duration: 1,
      y: -1000,
      ease: "power4.easeOut"
    }).to(".loader-wrap", {
      delay: -1.1,
      duration: 1,
      y: -1000,
      ease: "power4.easeOut"
    })
    // tl.play();
  }, []);

  return (
    <Container className="loader-wrap">
      <div className="text-wrap">
        <span className="text">INITIALIZING</span>
        <p>have a cup of coffee, and hold tight ...</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  font-family: "Made Bon Voyage Regular";
  background: #1b1b1b;

  div {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: #0e0e0e;
    span {
      font-size: 0vw;
      letter-spacing: 0rem;
    }

    p {
      font-size: 1.5rem;
      font-family: "gilroy thin", sans-serif;
      letter-spacing: 5px;
      opacity: 0;
    }
  }  
`;

export default Preloader;
