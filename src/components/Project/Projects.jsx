import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import RouteTransition from "../subComponents/RouteTransition";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Projects = ({ setViewProject }) => {
  const [projects, setProjects] = useState([
    {
      projectRank: "01",
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/61b360340618d937e9ded89a_drink-ky-app-screens.jpg",
      ProjectTitle: "Chemin Esports",
    },
    {
      projectRank: "02",
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/618f3ad5f6c6e05234740557_sarnco-mark.jpg",
      ProjectTitle: "Project Oxygen",
    },
    {
      projectRank: "03",
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/61b360340618d937e9ded89a_drink-ky-app-screens.jpg",
      ProjectTitle: "Lemon Juice",
    },
    {
      projectRank: "04",
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/61b360340618d937e9ded89a_drink-ky-app-screens.jpg",
      ProjectTitle: "Project Width",
    },
    {
      projectRank: "05",
      projectImg:
        "https://uploads-ssl.webflow.com/611868992ba0adbb0e5938f1/61b360340618d937e9ded89a_drink-ky-app-screens.jpg",
      ProjectTitle: "Alive",
    },
  ]);

  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(".works-title span", {
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

    // tl.from(".project-card", {
    //   duration: 1.8,
    //   y: 100,
    //   opacity: 0,
    //   ease: "power4.out",
    //   skewY: 7,
    //   stagger: {
    //     amount: 0.3,
    //   },
    // });
  }, []);

  return (
    <RouteTransition>
      <Container data-scroll-section>
        <Title className="works-title">
          <span>Latest</span>
          <span>Projects</span>
        </Title>
        <Content>
          <ProjectsContainer>
            {projects.map((item, index) => (
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
                        <span className="team">
                          Team — <span className="bold">TeamName</span>
                        </span>
                        <span className="dot">•</span>
                        <span className="madeFor">
                          Made for — <span className="bold">BrandName</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </ProjectsContainer>
          <ContactContainer>
            <h1 data-scroll data-scroll-speed="2">
              Have a project in mind?
            </h1>
            <p data-scroll data-scroll-speed="1">
              Let's have a discussion together and turn your imagination into
              creation.
            </p>
            <div className="contact">
              <Link id="contact" to="/contact">
                <BiMailSend />
              </Link>
              <a
                href="http://instagram.com/pow3r24k"
                target="_blank"
                id="instagram"
              >
                <FiInstagram />
              </a>
              <a
                href="https://github.com/KushalwithK"
                target="_blank"
                id="github"
              >
                <FiGithub />
              </a>
              <a
                href="https://discord.gg/ktUdBEezmN"
                target="_blank"
                id="discord"
              >
                <FaDiscord />
              </a>
              <a
                href="https://www.linkedin.com/in/kushal-shah-725a21246/"
                target="_blank"
                id="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </ContactContainer>
        </Content>
      </Container>
      <Footer setViewProject={setViewProject} />
    </RouteTransition>
  );
};

const Container = styled.div`
  width: 100vw;
`;

const Title = styled.div`
  font-family: "Times";
  height: 60vh;
  display: flex;
  justify-content: end;
  flex-direction: column;
  margin: 0 5rem;
  font-size: 10vw;
  font-weight: 600;
  margin-bottom: 10rem;
  line-height: 0.9;
  span {
    :nth-child(2) {
      margin-left: 15rem;
    }
  }
  @media (max-width: 1024px) {
    font-size: 5rem;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-left: 2rem;
    margin-bottom: 4rem;
    height: 30vh;
  }
`;

const Content = styled.div``;
const ProjectsContainer = styled.div`
  margin: 0 5rem;
  display: flex;
  flex-direction: column;
  :nth-child(even) {
    margin-left: auto;
  }
  @media (max-width: 768px) {
    margin: 0 2rem;
  }
`;
const ProjectCard = styled.div`
  width: 60vw;
  margin-bottom: 8rem;
  :nth-child(even) {
    margin-left: auto;
  }
  :last-child {
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
  -webkit-user-drag: none;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* clip-path: inset(0 100% 0 0);
    transition: all 1.2s cubic-bezier(0.77, 0, 0.175, 1);
    scale: 1.3; */
  }
  /* .is-inview {
    clip-path: inset(0 0 0 0);
    scale: 1;
  } */

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
        font-family: "gilroy light";
        padding: 0;
        font-size: 1.5rem;
        display: flex;
        rotate: 0deg;
        margin-top: 1rem;
        color: #fff;

        .team {
          .bold {
            font-family: "Gilroy medium";
          }
        }

        .dot {
          margin: 0 1.5rem;
        }

        .madeFor {
          .bold {
            font-family: "Gilroy medium";
          }
        }
      }
    }
  }
`;

const ContactContainer = styled.div`
  margin: 10rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Times";
    font-size: 9rem;
    line-height: 1;
    text-align: center;
  }
  p {
    font-size: 1.5rem;
    margin-top: 2rem;
    font-family: "Gilroy Thin";
    letter-spacing: 2px;
  }
  a {
    transition: all 0.3s linear;
    color: white;
    text-decoration: none;
  }

  #contact:hover {
    color: #ff9b9b;
  }
  #instagram:hover {
    color: #cd486b;
  }
  #github:hover {
    color: #171515;
  }
  #discord:hover {
    color: #7289da;
  }
  #linkedin:hover {
    color: #0a66c2;
  }
  .contact {
    margin-top: 3rem;
    display: flex;
    font-size: 2.5rem;
    justify-content: space-between;
    align-items: center;
    font-family: "Gilroy Light";
    width: 40%;
  }
`;

export default Projects;
