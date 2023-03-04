import React, { useEffect } from "react";
import {
  FaJava,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaAndroid,
} from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

import styled from "styled-components";
import Quote from "../Quote/Quote";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import gsap from "gsap";
import AboveFooter from "../subComponents/AboveFooter";

const About = ({ setViewProject }) => {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(".heading", {
      duration: 1.8,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });
  }, []);

  return (
    <>
      <Container data-scroll-section>
        <div className="content">
          <span className="heading" data-scroll data-scroll-speed="1">
            About <span className="bold">Me!</span>
          </span>

          <span className="paragraph firstParagraph">
            Before introducing me, i would like you all to know why i started
            <span className="bold"> Programming.</span> So after my 10th board
            where i got really bad grades, i knew i am not much in{" "}
            <span className="bold">studies</span> so i should start learning new
            skills so that something would be there for me to do even if i don’t
            do much in studies, but when i started doing{" "}
            <span className="bold">Programming</span> i forgot all about the
            <span className="bold"> stuff</span> why i started it and kept doing
            it because it was really <span className="bold">fun</span> and
            <span className="bold">enjoying</span> to be very honest. So that
            how i entered this <span className="bold">industry</span>, My name
            is <span className="bold">Kushal Shah</span> and i am currently a
            <span className="bold"> Frontend, Backend</span> and{" "}
            <span className="bold">Java Developer</span>
            working for <span className="bold">Clever Studio.</span>
          </span>

          <span className="paragraph secondParagraph">
            I can make any <span className="bold">website</span> you desire with
            the most popular <span className="bold">Frontend</span> library
            <span className="bold"> ReactJS</span>. I know{" "}
            <span className="bold">Tailwind CSS</span>, the best{" "}
            <span className="bold">CSS Framework </span>
            and <span className="bold">Java for Backend.</span> I’ve been
            working in this field from the past 2 years, I also know{" "}
            <span className="bold">Android App Development</span> using{" "}
            <span className="bold">Kotlin, Java</span> and{" "}
            <span className="bold">XML.</span>
          </span>

          <span className="paragraph thirdParagraph">
            I am currently a <span className="bold">Computer Science</span>{" "}
            student in <span className="bold">BSC CS</span> in{" "}
            <span className="bold">Mumbai, India. </span>
            I’ve been self leaning <span className="bold">
              Programming
            </span>{" "}
            since i was <span className="bold">16yr</span> old, I failed many
            times but since i was <span className="bold">stubborn</span> from
            the start i didn’t gave up and kept{" "}
            <span className="bold">leaning.</span> All of them who supported me
            when i was about to gave up are the most important persons in my
            <span className="bold"> Programming</span> Life. I will keep{" "}
            <span className="bold">growing </span>
            and keep leaning new things as nothing is{" "}
            <span className="bold">permanent</span>, someday there will be some
            more advanced <span className="bold">technology</span> and how will
            we keep up with that? By <span className="bold">learning</span> of
            course! That’s about <span className="bold">everything</span> i
            would like to say about me, there’s lot more that can’t be expressed
            here. If you have any <span className="bold">project</span> and need
            a <span className="bold">freelancer</span> who can make{" "}
            <span className="bold">Website, App, API</span> feel free to{" "}
            <span className="bold">contact </span>
            me..
          </span>

          <span className="paragraph fourthParagraph">
            You can contact me via the{" "}
            <span className="bold">Contact page</span> or mail me at
            <span className="bold"> kushal@cleverstudio.in</span>
          </span>

          <span className="paragraph lastParagraph">
            Thanks for giving your valuable time reading all of this, it took a
            while writing it so yeah.{" "}
            <span className="bold">Have a great day!</span>
          </span>
        </div>

        <div className="expertise">
          <span data-scroll data-scroll-speed="1">
            My
          </span>
          <span data-scroll data-scroll-speed="2">
            Expertise
          </span>
          <div className="skills">
            <span className="java" data-scroll data-scroll-speed="1">
              <FaJava />
            </span>
            <span className="spring" data-scroll data-scroll-speed="2">
              <SiSpring />
            </span>
            <span className="android" data-scroll data-scroll-speed="1">
              <FaAndroid />
            </span>
            <span className="html" data-scroll data-scroll-speed="2">
              <FaHtml5 />
            </span>
            <span className="css" data-scroll data-scroll-speed="1">
              <FaCss3 />
            </span>
            <span className="js" data-scroll data-scroll-speed="2">
              <DiJavascript1 />
            </span>
            <span className="react" data-scroll data-scroll-speed="1">
              <FaReact />
            </span>
          </div>
          <div className="tools">
            <span data-scroll data-scroll-speed="1">
              Tools
            </span>
            <span data-scroll data-scroll-speed="2">
              I Use
            </span>
            <div className="subSection">
              <div className="designSection">
                <div className="title" data-scroll data-scroll-speed="1">
                  Website UI/UX
                </div>
                <div className="tool">
                  <div className="section">
                    <span>Figma</span>
                    <span>UI/UX Designing</span>
                  </div>
                  <div className="section">
                    <span>HTML 5</span>
                    <span>Web Frontend</span>
                  </div>
                  <div className="section">
                    <span>CSS 3</span>
                    <span>Web Frontend</span>
                  </div>
                  <div className="section">
                    <span>ReactJS</span>
                    <span>Web Frontend</span>
                  </div>
                  <div className="section">
                    <span>JavaScript</span>
                    <span>Web Frontend / Backend</span>
                  </div>
                </div>
              </div>
              <div className="developmentSection">
                <div className="title" data-scroll data-scroll-speed="1">
                  Developing <br />
                  Applications
                </div>
                <div className="tool">
                  <div className="section">
                    <span>Java</span>
                    <span>Web Backend</span>
                  </div>
                  <div className="section">
                    <span>Spring</span>
                    <span>REST API's</span>
                  </div>
                  <div className="section">
                    <span>NodeJS</span>
                    <span>Web Backend</span>
                  </div>
                  <div className="section">
                    <span>MongoDB</span>
                    <span>Backend Database</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Quote setViewProject={setViewProject} />
      <AboveFooter/>
      <Footer />
    </>
  );
};

const Container = styled.div`
  margin: 0 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    height: 100vh;
    width: 80%;
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .heading {
      font-family: "Gilroy Regular";
      font-size: 4rem;
      margin-bottom: 2rem;
    }

    .paragraph {
      font-family: "Gilroy Light";
      text-align: center;
      margin: 1rem 0;
      font-size: 1.2rem;
    }
  }

  .expertise {
    width: 100%;
    > span {
      font-size: 6rem;
      display: block;
      font-family: "Made Bon Voyage Regular";
      :nth-child(2) {
        width: 20vw;
        text-align: end;
      }
    }

    .skills {
      margin-top: 5rem;
      font-size: 5.2rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      > span {
        background-color: #242424;
        padding: 2.8rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease-out;

        &:hover {
          background-color: #fff;
          color: #242424;
        }
      }
    }
  }

  .tools {
    width: 100%;
    margin-top: 10rem;
    > span {
      font-size: 6rem;
      display: block;
      font-family: "Made Bon Voyage Regular";
      :nth-child(2) {
        width: 15vw;
        text-align: end;
      }
    }

    .subSection {
      display: flex;
      flex-direction: column;
      margin-top: 4rem;

      .designSection,
      .developmentSection {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 5rem;

        .title {
          font-family: "Made Bon Voyage Regular";
          font-size: 4rem;
        }

        .tool {
          width: 60%;

          .section {
            display: flex;
            justify-content: space-between;
            font-family: "Gilroy Regular";
            font-size: 1.5rem;
            height: 4rem;
            border-bottom: 2px solid #313131;
            margin-bottom: 3rem;
            transition: all 0.25s ease-out;

            span:nth-child(2) {
              color: #666666;
            }

            :hover {
              border-bottom: 2px solid #afafaf;
              span:nth-child(2) {
                color: #afafaf;
              }
            }
          }
        }
      }
    }
  }

  .bold {
    font-family: "Gilroy SemiBold";
  }
`;

export default About;
