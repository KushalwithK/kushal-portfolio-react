import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Quote from "../Quote/Quote";
import RouteTransition from "../subComponents/RouteTransition";
import gsap from "gsap";
import { useState } from "react";
import { Link } from "react-router-dom";
import AboveFooter from "../subComponents/AboveFooter";
import { baseUrl, projects as project, images, testimonial as testimonials, apiSingleton } from "../services/Provider";
import CleverStudio from "../../assets/clever_studio.png"
import { BiRightArrowAlt } from "react-icons/bi"

const Home = ({ setViewProject }) => {
  const [projects, setProjects] = useState([]);
  const [testimonial, setTestimonial] = useState([]);

  const tl = gsap.timeline();

  useEffect(() => {

    apiSingleton.get(project).then((data) => {
      setProjects(data.data)
      console.table(data.data)
    }).catch((error) => {
      console.log(console.error(error));
    })

  }, []);

  useEffect(() => {

    apiSingleton.get(testimonials).then((data) => {
      setTestimonial(data.data)
      console.table(testimonial)
    }).catch((error) => {
      console.log(console.error(error));
    })

  }, []);

  useEffect(() => {
    tl.from(".hero-title .navLinks", {
      duration: 1.8,
      y: 100,
      opacity: 0,
      ease: "power3.out",
      delay: 3,
      skewX: 7,
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
            <span className="navLinks">
              <span>CREATIVE</span>
              <span>FULL STACK</span>
              <span>DEVELOPER</span>
            </span>
          </Header>
          {/* <AboutSection>
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
                  Hey, im Kushal Shah.
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
                  <span>Read More</span>
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
                      fill="#c9c9c9"
                    ></path>
                  </svg>
                </Link>
              </Button>
            </div>
          </AboutSection> */}
          <ProjectsSection>
            <ProjectTitle>
              <div>
                <p>
                  Recent
                </p>
                <p>
                  Projects
                </p>
              </div>
            </ProjectTitle>
            <ProjectCards>
              {projects.slice(0, 4).map((item, index) => (
                <Link to={`/projects/${item.url}`}>
                  <ProjectCard key={index} >
                    <ImageHolder>
                      <img src={baseUrl + images + item.images[0].name} />
                      <ProjectInfo>
                        <div>
                          <span>{item.title}</span>
                          <p>
                            {item.description}
                          </p>
                        </div>
                        <div>
                          <BiRightArrowAlt />
                        </div>
                      </ProjectInfo>
                    </ImageHolder>
                  </ProjectCard>
                </Link>
              ))}
            </ProjectCards>
            <ViewAllBtn data-scroll data-scroll-speed="1">
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
                to="/projects"
              >
                <span>Explore</span>
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
                    fill="#c9c9c9"
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
              {
                testimonial.slice(0, 1).map((test) => {
                  return (
                    <div className="testimonials" key={test.id}>
                      <span>
                        &#10077;{" "}
                        <span className="text">
                          {test.description}
                        </span>{" "}
                        &#10078;
                      </span>
                      <span className="credit">- {test.quotedBy}</span>
                    </div>
                  )
                })
              }

              <div className="bullets">
                1 — <span className="current">2</span> — 3
              </div>
            </div>
          </Testimonial>
        </Content>
      </Container>
      <Quote setViewProject={setViewProject} />
      <AboveFooter />
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
  padding-top: 4rem;

  @media (max-width: 1024px) {
    padding-top: 2rem;
  }

  @media (max-width: 768px) {
    padding-top: 1rem;
  }
`;
const Header = styled.div`
  height: 100vh;
  user-select: none;
  display: flex;
  justify-content: center;
  flex-direction: column;

  span {
    display: block;
    font-family: "Made Bon Voyage Regular";
    font-size: 11vw;
    line-height: 1;

    &:nth-child(2) {
      font-size: 12vw;
    }

    &:nth-child(3) {
      font-size: 15vw;
    }

  }

  @media (max-width: 1024px) {
    
  }
  @media (max-width: 768px) {
    span {
      font-size: 15vw;
      text-align: center;

      &:nth-child(2) {
      font-size: 15vw;
    }

    &:nth-child(3) {
      font-size: 15vw;
    }
    }
  }
`;

const AboutSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Gilroy Regular";
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
    font-size: 1.5rem;
    svg {
      margin-left: 1rem;
    }
  }
  @media (max-width: 768px) {
    width: 120px;
    /* margin: 2rem 0rem; */
  }
`;

const ProjectsSection = styled.section``;

const ProjectTitle = styled.div`
  display: flex;
  font-size: clamp(4rem, 7vw, 7rem);
  font-family: "Made Bon Voyage Regular";
  line-height: 1;
  padding-bottom: 10vh;
  p {
    :last-child {
      padding-left: 7rem;
    }
  }
`;

const ProjectCards = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const ProjectCard = styled.div`
  width: 45vw;
  margin-bottom: 2rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0px 10px 36px 4px rgba(0,0,0,0.1);

  div {
    div {
      div:nth-child(2) {
        transition: all 0.3s ease;
      }
    }
  }

  &:hover {
    div {
      div {
        div:nth-child(2) {
          border: none;
          background: white;
          transform: rotate(-45deg);
          svg {
            color: black;
          }
        }
      }
    }
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

  a {
    display: block;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #181818;
  font-family: "Made Bon Voyage Regular";
  color: #dddddd;
  padding: 1rem 2rem;
  span {
        font-size: 2.5rem;
  }
  p {
        font-family: "gilroy light";
        color: #ffffff78;
        line-height: 1.7;
        padding: 0;
        font-size: 1.1rem;
        letter-spacing: .1rem;
  }
  div:nth-child(2) {
    height: 3rem;
    width: 3rem;
    border-radius: 10rem;
    border: 2px solid #ffffff29;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;

    svg {
      color: #ffffff86;
      font-size: 1.5rem;
    }
  }
`;

const ViewAllBtn = styled.div`
  font-family: "Made Bon Voyage Regular";
  font-size: clamp(4rem, 7vw, 7rem);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 6rem;
  a {
    color: #fff;
    text-decoration: none;
  }
  span {
    padding-right: 3rem;
  }
  svg {
    width: 4rem;
    height: 4rem;
  }

  @media (max-width: 1024px) {
    font-size: 7rem;
    svg {
      width: 4rem;
      height: 4rem;
    }
  }
  @media (max-width: 768px) {
    @media (max-width: 1024px) {
    font-size: 4rem;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
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
          font-family: "Made Bon Voyage Regular";
          color: #d1d1d1;
        }
      }
      .credit {
        font-size: 1.5rem;
        font-family: "Made Bon Voyage Regular";
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
