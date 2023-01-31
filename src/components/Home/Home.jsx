import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Quote from "../Quote/Quote";
import RouteTransition from "../subComponents/RouteTransition";
import gsap from "gsap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ setViewProject }) => {
  const [projects, setProjects] = useState([
    {
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/61b360340618d937e9ded89a_drink-ky-app-screens.jpg",
      ProjectTitle: "Chemin Esports",
    },
    {
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/618f3ad5f6c6e05234740557_sarnco-mark.jpg",
      ProjectTitle: "Project blue",
    },
    {
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/61b360340618d937e9ded89a_drink-ky-app-screens.jpg",
      ProjectTitle: "Oxygen",
    },
  ]);

  let counting = 1;

  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(".hero-title div", {
      duration: 1.8,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.4,
      },
    });
  }, []);

  return (
    <RouteTransition>
      <Container data-scroll-section>
        <Content>
          <Header className="hero-title" data-scroll data-scroll-speed="2">
            <span>KUSHAL SHAH</span>
            <span className="skills">
              <span
                className="app"
                onMouseEnter={() => {
                  setViewProject("invert-cursor");
                }}
                onMouseLeave={() => {
                  setViewProject(false);
                }}
              >
                App Developer
              </span>
              <span className="dot">•</span>
              <span
                className="web"
                onMouseEnter={() => {
                  setViewProject("invert-cursor");
                }}
                onMouseLeave={() => {
                  setViewProject(false);
                }}
              >
                Web Developer
              </span>
              <span className="dot">•</span>
              <span
                className="java"
                onMouseEnter={() => {
                  setViewProject("invert-cursor");
                }}
                onMouseLeave={() => {
                  setViewProject(false);
                }}
              >
                Java Backend Developer
              </span>
            </span>
          </Header>
          <AboutSection>
            <div className="imageHolder" data-scroll>
              <img
                data-scroll
                data-scroll-speed="3"
                className="image one"
                src="https://res.cloudinary.com/dzsocqtuc/image/upload/v1668070795/Portfolio/index_ph3l7j.jpg"
              />
              <img
                data-scroll
                data-scroll-speed="1"
                className="image two"
                src="https://res.cloudinary.com/dzsocqtuc/image/upload/v1668070794/Portfolio/indexs_ksz2lr.jpg"
              />
              <img
                data-scroll
                data-scroll-speed="3  "
                className="image three"
                src="https://res.cloudinary.com/dzsocqtuc/image/upload/v1668070794/Portfolio/insdex_z7ewkd.jpg"
              />
            </div>
            <div>
              <p>
                <span>
                  Hey, it's Kushal Shah.
                  <br />A Freelance Android and Web developer from India who
                  likes to make Creative App and Websites!
                </span>
              </p>
              <Button>
                <Link
                  onMouseEnter={() => {
                    setViewProject("invert-cursor");
                  }}
                  onMouseLeave={() => {
                    setViewProject(false);
                  }}
                  onClick={() => {
                    setViewProject(false);
                  }}
                  to="/about"
                >
                  <span>Know More</span>
                  <svg
                    width="37"
                    height="17"
                    viewBox="0 0 37 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z"
                      fill="#b3cc6d"
                    ></path>
                  </svg>
                </Link>
              </Button>
            </div>
          </AboutSection>
          <ProjectsSection>
            <ProjectTitle>
              <p data-scroll data-scroll-speed="1">
                Recent
              </p>
              <p data-scroll data-scroll-speed="2">
                Projects
              </p>
            </ProjectTitle>
            {projects.slice(0, 3).map((item, index) => (
              <ProjectCard key={index} className="project-card">
                <ImageHolder
                  onMouseEnter={() => {
                    setViewProject("View-Project");
                  }}
                  onMouseLeave={() => {
                    setViewProject(false);
                  }}
                  onClick={() => {
                    setViewProject(false);
                  }}
                >
                  <Link to="/works/54">
                    <img src={item.projectImg} />
                  </Link>
                </ImageHolder>
                <ProjectInfo>
                  <div>
                    <p>#</p>
                    <div className="titleNdesc">
                      <h1>{item.ProjectTitle}</h1>
                      <p>
                        This is a mandatory description, please read it.. bsdk
                        padhle naaa
                      </p>
                    </div>
                  </div>
                  <a href="https://www.google.com"></a>
                </ProjectInfo>
              </ProjectCard>
            ))}
            <ViewAllBtn data-scroll data-scroll-speed="2">
              <Link
                onMouseEnter={() => {
                  setViewProject("invert-cursor");
                }}
                onMouseLeave={() => {
                  setViewProject(false);
                }}
                onClick={() => {
                  setViewProject(false);
                }}
                to="/works"
              >
                <span>View All</span>
                <svg
                  width="37"
                  height="17"
                  viewBox="0 0 37 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z"
                    fill="#b3cc6d"
                  ></path>
                </svg>
              </Link>
            </ViewAllBtn>
          </ProjectsSection>
          <Testimonial>
            <div className="content">
              <div className="info">
                <span className="text1">
                  What client's think <span className="semiBold">about </span>
                  <span className="bold">me?</span>
                </span>
                <span className="desc">
                  What my clients think about me and my work, when i ask them to
                  give a honest opinion!
                </span>
              </div>
              <div className="testimonials">
                <span>
                  &#10077;{" "}
                  <span className="text">
                    Working with Kushal was the best Experience of my life, he
                    even helped me with the server side stuff without any extra
                    charges.
                  </span>{" "}
                  &#10078;
                </span>
                <span className="credit">- My Subordinate</span>
              </div>
              <div className="bullets">
                1 — <span className="current">2</span> — 3
              </div>
            </div>
          </Testimonial>
        </Content>
      </Container>
      <Quote setViewProject={setViewProject} />
      {/* <FooterTitle titleLink="/works" title="Recent Works" /> */}
      <Footer setViewProject={setViewProject} />
    </RouteTransition>
  );
};

const Container = styled.div`
  margin: 0 5rem;
  @media (max-width: 768px) {
    margin: 0 2rem;
  }
`;

const Content = styled.div`
  padding-top: 2.5rem;
`;
const Header = styled.div`
  height: 100vh;
  user-select: none;
  display: flex;
  justify-content: center;
  flex-direction: column;

  > span {
    text-align: center;
    font-family: "Times";
    font-size: 11vw;
    line-height: 1;
  }

  .skills {
    text-align: center;
    font-family: "Sk Modernist Regular";
    font-size: 1.8vw;
    line-height: 1;
    letter-spacing: 3px;
    color: #ffffffc7;
    margin-top: 1rem;

    span {
      margin: 0 1rem;
      transition: all 0.3s ease-in-out;
      text-decoration: none;
    }

    .dot {
      color: #ffffff4e;
    }

    .app:hover ~ .web {
      color: #ffffff4e;
    }

    .app:hover ~ .java {
      color: #ffffff4e;
    }

    .web:hover ~ .app {
      color: #ffffff4e;
    }

    .web:hover ~ .java {
      color: #ffffff4e;
    }

    .java:hover ~ .app {
      color: #ffffff4e;
    }

    .java:hover ~ .web {
      color: #ffffff4e;
    }
  }

  @media (max-width: 768px) {
    height: 90vh;

    font-size: 15vw;
    div {
      text-align: center;
      :nth-child(2) {
        text-align: center;
      }
    }
  }
`;

const AboutSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Times";
  text-align: center;
  width: 55%;
  margin: 0 auto;
  position: relative;
  margin-bottom: 10rem;
  .imageHolder {
    width: 80vw;
    height: 100%;
    position: absolute;
    z-index: -1;
    .image {
      display: block;
      position: absolute;
      width: 15rem;
      opacity: 0.5;
      rotate: 10deg;
    }
    .two {
      top: 25%;
      rotate: -10deg;
      right: 0;
    }
    .three {
      bottom: 0;
    }
  }
  div {
    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        font-weight: 600;
        font-size: clamp(1rem, 5vw, 3.5rem);
      }
    }
  }
  @media (max-width: 1024px) {
    margin-bottom: 5rem;
    height: 40vh;
    width: 80%;
    .imageHolder {
      display: none;
    }
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Button = styled.div`
  margin: 0 auto;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    svg {
      margin-left: 1rem;
    }
  }
  @media (max-width: 768px) {
    width: 120px;
    margin: 2rem 0rem;
  }
`;

const ProjectsSection = styled.section``;

const ProjectTitle = styled.div`
  font-size: clamp(4rem, 10vw, 10rem);
  font-family: "Times";
  line-height: 1;
  padding-bottom: 15vh;
  p {
    :last-child {
      padding-left: 7rem;
    }
  }
`;

const ProjectCard = styled.div`
  width: 60vw;
  margin-bottom: 8rem;
  :nth-child(odd) {
    margin-left: auto;
  }
  :nth-last-child(2) {
    margin-bottom: 0;
  }
  @media (max-width: 1024px) {
    width: 100%;
    :nth-child(even) {
      margin-left: 0;
    }
    margin-bottom: 4rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const ImageHolder = styled.div`
  height: 33vw;
  overflow: hidden;
  position: relative;
  a {
    display: block;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 40vh;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 25vh;
  }
`;

const ProjectInfo = styled.div`
  font-family: "Times";
  display: flex;
  padding: 1.5rem 0;
  padding-bottom: 0;
  color: #dddddd;
  div {
    display: flex;
    p {
      font-family: "Gilroy regular", sans-serif;
      padding: 0 0.5rem;
      opacity: 0.5;
      font-size: 2.5rem;
      rotate: -10deg;
    }
    .titleNdesc {
      display: flex;
      flex-direction: column;
      h1 {
        font-size: 5rem;
      }
      p {
        font-family: "gilroy regular";
        padding: 0;
        font-size: 1.5rem;
        rotate: 0deg;
      }
    }
  }
`;

const ViewAllBtn = styled.div`
  font-family: "Times";
  font-size: 9rem;
  display: flex;
  align-items: center;
  margin-top: 10rem;
  a {
    color: #fff;
    margin-left: auto;
    text-decoration: none;
  }
  span {
    padding-right: 3rem;
  }
  svg {
    width: 5rem;
    height: 5rem;
  }
`;

const Testimonial = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      .text1 {
        font-size: 2.5rem;
        font-family: "Gilroy Light";
        .semiBold {
          font-family: "Gilroy Regular";
        }
        .bold {
          font-family: "Gilroy Medium";
        }
        margin-bottom: 10px;
      }
      .desc {
        font-family: "Gilroy thin";
        font-size: 1.2rem;
      }
    }

    @media (max-width: 768px) {
      .info {
        .text1 {
          font-size: 2rem;
        }

        .desc {
          font-size: 1rem;
          margin-top: 1rem;
        }
      }
    }

    .testimonials {
      margin: 5rem 0;
      display: flex;
      flex-direction: column;
      text-align: center;

      > span {
        font-size: 2.2rem;
        color: #d1d1d1;

        .text {
          font-family: "Fondomento Italic";
          color: #d1d1d1;
        }
      }
      .credit {
        font-size: 1.5rem;
        font-family: "Fondomento Italic";
        color: #7a7a7a;
        margin-top: 2rem;
        text-align: end;
      }
    }

    .bullets {
      font-size: 1.3rem;
      font-family: "Gilroy Light";

      .current {
        font-family: "Gilroy Medium";
      }
    }
  }
`;

export default Home;
