import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import RouteTransition from "../subComponents/RouteTransition";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { Link } from "react-router-dom";
import gsap from "gsap";
import AboveFooter from "../subComponents/AboveFooter";
import { baseUrl, projects as project, images } from "../services/Provider";
import axios from "axios";

const Projects = ({ setViewProject }) => {
  const [projects, setProjects] = useState([]);

  const tl = gsap.timeline();

  const fetchData = async () => {
    const response = await fetch(baseUrl + project)
    const data = response.json
    console.log(data.data)
  }

  useEffect(() => {

    axios.get(baseUrl + project).then((data) => {
      setProjects(data.data)
      console.table(data.data)
    }).catch((error) => {
      console.log(console.error(error));
    })

  }, [])

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
                    <img src={baseUrl + images + item.images[0].name} />
                  </Link>
                </ImageHolder>
                <ProjectInfo>
                  <div>
                    <p>#</p>
                    <div className="titleNdesc">
                      <h4>{item.title}</h4>
                      <p>
                        <span className="team">
                          Team — <span className="bold">{item.author}</span>
                        </span>
                        <span className="dot">•</span>
                        <span className="madeFor">
                          Made for — <span className="bold">{item.client}</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </ProjectsContainer>
        </Content>
      </Container>
      <AboveFooter />
      <Footer setViewProject={setViewProject} />
    </RouteTransition>
  );
};

const Container = styled.div`
  width: 100vw;
`;

const Title = styled.div`
  font-family: "Made Bon Voyage Regular";
  height: 60vh;
  display: flex;
  justify-content: end;
  flex-direction: column;
  margin: 0 5rem;
  font-size: 10vw;
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
    border-radius: 1.5rem;
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
  font-family: "Made Bon Voyage Regular";
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
      h4 {
        font-size: 5rem;
        font-weight: 100;
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

export default Projects;
