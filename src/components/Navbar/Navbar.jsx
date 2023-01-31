import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { BiMenuAltRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = ({ setViewProject }) => {
  const tl = gsap.timeline({ paused: true });

  const openMenu = () => {
    tl.play();
  };

  const closeMenu = () => {
    tl.reverse();
  };

  useEffect(() => {
    tl.to(".mainNav", {
      x: "0",
      ease: "Expo.easeInOut",
    });

    tl.to(".navLink", {
      y: "0",
      opacity: "1",
      ease: "Expo.easeOut",
      stagger: 0.1,
    });

    tl.to(".location", {
      y: "0",
      opacity: "1",
      ease: "Expo.easeOut",
    });
  }, []);

  return (
    <>
      <NavPhone>
        <span className="logoMobile">LOGO</span>
        <span className="openMenu" onClick={openMenu}>
          <BiMenuAltRight />
        </span>
      </NavPhone>
      <Nav className="mainNav">
        <span className="closeMenu" onClick={closeMenu}>
          <CgClose />
        </span>
        <span
          className="logoPC"
          onMouseEnter={() => {
            setViewProject("invert-cursor");
          }}
          onMouseLeave={() => {
            setViewProject(false);
          }}
        >
          LOGO
        </span>
        <div className="navLinks">
          <div className="links">
            <ul>
              <Link
                className="navLink"
                onMouseEnter={() => {
                  setViewProject("Projects");
                }}
                onMouseLeave={() => {
                  setViewProject(false);
                }}
                to="/projects"
              >
                Projects
              </Link>
              <Link
                className="navLink"
                onMouseEnter={() => {
                  setViewProject("About");
                }}
                onMouseLeave={() => {
                  setViewProject(false);
                }}
                to="/about"
              >
                About
              </Link>
              <Link
                className="navLink"
                onMouseEnter={() => {
                  setViewProject("Contact");
                }}
                onMouseLeave={() => {
                  setViewProject(false);
                }}
                to="/contact"
              >
                Contact
              </Link>
            </ul>
          </div>
          <div
            className="location"
            onMouseEnter={() => {
              setViewProject("invert-cursor");
            }}
            onMouseLeave={() => {
              setViewProject(false);
            }}
          >
            Mumbai — India
          </div>
        </div>
      </Nav>
    </>
  );
};

const NavPhone = styled.div`
  display: none;
  padding: 2rem;
  justify-content: space-between;
  width: 100%;

  span {
    font-family: "Gilroy Medium";
    font-size: 1.3rem;
  }

  .openMenu {
    font-size: 1.7rem;
  }

  @media screen and (max-device-width: 916px) {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  position: absolute;
  padding: 3rem 5rem;
  opacity: 1;
  z-index: 9999;
  transform: none;

  .closeMenu {
    display: none;
  }

  .logoPC {
    font-family: "Gilroy Bold";
    font-size: 1.5rem;
  }

  .navLinks {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    font-size: 1.2rem;
    color: #d4d4d4;

    .links {
      ul {
        display: flex;
        list-style: none;
        align-items: center;
        margin-left: 5rem;

        a {
          color: #d4d4d4;
          text-decoration: none;
          margin: 0 2.5rem;
          font-family: "Gilroy Light";
          opacity: 1;
          transform: none;
        }

        .active {
          font-family: "Gilroy Regular";
        }
      }
    }

    .location {
      font-family: "Gilroy Regular";
      opacity: 1;
      transform: none;
    }
  }

  @media only screen and (max-device-width: 916px) {
    padding: 0;
    height: 100vh;
    transform: translateX(-100%);

    .closeMenu {
      display: block;
      position: absolute;
      right: 2rem;
      top: 2rem;
      font-family: "Gilroy Medium";
      font-size: 1.7rem;
    }

    .logoPC {
      display: none;
    }

    .navLinks {
      flex-direction: column;
      justify-content: space-evenly;
      font-size: 1.4rem;

      .links {
        align-items: center;
        justify-content: center;

        ul {
          flex-direction: column;
          margin-left: 0;

          li {
            margin: 2.5rem 0;
            transform: translateY(100px);
            opacity: 0;
          }
        }
      }

      .location {
        transform: translateY(100px);
        opacity: 0;
      }
    }
  }
`;

export default Navbar;
