import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import websiteImage from "./webDemo.png";
import axios from "axios";

const RecentProjects = ({ setViewProject }) => {
  const [projects, setProjects] = React.useState([
    {
      id: -1,
      title: "Title Should Go Here",
      description: "This is the demo description for the main project div",
      brand: "No Brand",
      imgUrl: websiteImage,
      teamName: "Clever Studio",
    },
  ]);

  React.useEffect(() => {
    getProjects();
  }, []);

  const getProjects = () => {
    axios
      .get("http://localhost:8080/projects")
      .then((response) => setProjects(response.data));
  };

  return (
    <Main data-scroll-section>
      <div className="upperBlock">
        <span>Recent Projects</span>
      </div>
      <div className="projectsBox">
        {projects.map((project) => {
          return (
            <div
              className="projectView"
              key={project.id}
              onMouseEnter={() => {
                setViewProject("Projects");
              }}
              onMouseLeave={() => {
                setViewProject(false);
              }}
            >
              <img src={project.imgUrl} className="image"></img>
              <p>{project.title}</p>
              <span>
                Made for : <span>{project.brand}</span>
              </span>
            </div>
          );
        })}
      </div>
      <div
        className="exploreBtn"
        onMouseEnter={() => {
          setViewProject("Explore");
        }}
        onMouseLeave={() => {
          setViewProject(false);
        }}
      >
        <a href="#">
          Explore all <BsArrowRight />
        </a>
      </div>
    </Main>
  );
};

const Main = styled.div`
  padding: 0 6rem;

  .upperBlock {
    margin-bottom: 4rem;
    span {
      font-family: "Gilroy Thin";
      font-size: 4rem;
    }
  }

  .projectsBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .projectView {
      display: flex;
      flex-direction: column;
      margin-bottom: 4rem;
      height: 50rem;
      width: 50rem;
      .image {
        object-fit: cover;
        height: 100%;
        width: 100%;
        background-color: #1d1d1d;
        margin-bottom: 0.6rem;
      }

      p {
        font-family: "Gilroy Regular";
        font-size: 2.5rem;
        line-height: 4rem;
      }

      span {
        font-family: "Gilroy Thin";
        font-size: 1.3rem;
        letter-spacing: 2px;

        &:nth-last-child() {
          font-family: "Gilroy Regular";
        }
      }
      &:hover {
        cursor: pointer;
      }
    }
  }

  .exploreBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
    a {
      text-align: center;
      padding: 1rem 3.5rem;
      border: 2px solid #282828;
      border-radius: 10rem;
      text-decoration: none;
      font-family: "Gilroy Regular";
      font-size: 1.1rem;
      color: #9e9e9e;
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        margin-left: 0.5rem;
      }
    }
  }
`;

export default RecentProjects;
