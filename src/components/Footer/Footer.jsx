import React from "react";
import styled from "styled-components";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";

const Footer = ({ setViewProject }) => {
  return (
    <FooterComp data-scroll-section>
      <div className="footer">
        <div className="leftAlign">
          <span
            className="project"
            onMouseEnter={() => {
              setViewProject("invert-cursor");
            }}
            onMouseLeave={() => {
              setViewProject(false);
            }}
          >
            Any Project Ideas?
          </span>
          <span
            className="desc"
            onMouseEnter={() => {
              setViewProject("invert-cursor");
            }}
            onMouseLeave={() => {
              setViewProject(false);
            }}
          >
            If you have a project ideas and want to hire a <br />
            developer, you can contact me via,
          </span>
          <span className="contacts">
            <span
              onMouseEnter={() => {
                setViewProject("invert-cursor");
              }}
              onMouseLeave={() => {
                setViewProject(false);
              }}
            >
              Email
            </span>{" "}
            <span
              onMouseEnter={() => {
                setViewProject("invert-cursor");
              }}
              onMouseLeave={() => {
                setViewProject(false);
              }}
            >
              Twitter
            </span>{" "}
            <span
              onMouseEnter={() => {
                setViewProject("invert-cursor");
              }}
              onMouseLeave={() => {
                setViewProject(false);
              }}
            >
              Instagram
            </span>
          </span>
        </div>
        <div className="rightAlign">
          <div className="socials">
            <span>— My Socials —</span>
            <div className="social">
              <span id="instagram">
                <FiInstagram />
              </span>
              <span id="github">
                <FiGithub />
              </span>
              <span id="discord">
                <FaDiscord />
              </span>
              <span id="linkedin">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
          <div className="info">
            <span className="mail">kushal@cleverstudio.in</span>
            <span className="location">
              Mumbai, <span className="bold">India.</span>
            </span>
          </div>
        </div>
        <span className="FooterCredits">
          Made by <span className="name">Kushal Shah.</span>
        </span>
      </div>
    </FooterComp>
  );
};

const FooterComp = styled.div`
  padding: 4rem 5rem;
  background-color: #ffffff;
  color: #000000;

  .footer {
    display: flex;
    justify-content: space-between;

    .leftAlign {
      display: flex;
      flex-direction: column;

      .project {
        font-family: "Gilroy Regular";
        font-size: 2.5rem;
      }

      .desc {
        font-family: "Gilroy Regular";
        font-size: 1.2rem;
        margin-top: 0.5rem;
      }

      .contacts {
        display: flex;
        justify-content: space-between;
        margin-right: 4rem;
        margin-top: 3rem;
        font-family: "Gilroy Medium";
        font-size: 1.3rem;

        span {
          text-decoration: underline;
          text-underline-offset: 0.5rem;

          &:hover {
            cursor: pointer;
          }
        }
      }
    }

    .rightAlign {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .socials {
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
          font-family: "Gilroy Regular";
          font-size: 1.2rem;
        }

        .social {
          margin-top: 1rem;

          span {
            font-size: 1.5rem;
            margin: 0 1rem;
            transition: all 0.3s linear;
            color: #8a8a8a;
          }

          #instagram:hover {
            color: #cd486b;
            cursor: pointer;
          }
          #github:hover {
            color: #171515;
            cursor: pointer;
          }
          #discord:hover {
            color: #7289da;
            cursor: pointer;
          }
          #linkedin:hover {
            color: #0a66c2;
            cursor: pointer;
          }
        }
      }

      .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: "Gilroy Regular";
        font-size: 1.1rem;

        .location {
          margin-top: 0.2rem;
          .bold {
            font-family: "Gilroy SemiBold";
          }
        }
      }
    }

    .FooterCredits {
      position: absolute;
      bottom: 1rem;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 1rem;
      font-family: "Gilroy Regular";

      .name {
        font-family: "Gilroy Semibold";
      }

      .cleverStudio {
        font-family: "Gilroy Semibold";
      }
    }
  }
`;

export default Footer;
