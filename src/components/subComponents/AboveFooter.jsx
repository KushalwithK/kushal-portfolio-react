import styled from "styled-components";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { Link } from "react-router-dom";

const AboveFooter = () =>
    <ContactContainer data-scroll-section>
        <span data-scroll data-scroll-speed="2">
            Have a project in mind?
        </span>
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
            <a href="https://github.com/KushalwithK" target="_blank" id="github">
                <FiGithub />
            </a>
            <a href="https://discord.gg/ktUdBEezmN" target="_blank" id="discord">
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

const ContactContainer = styled.div`
  margin: 10rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-family: "Made Bon Voyage Regular";
    font-size: 8vw;
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
    font-size: 2.5vw;
    justify-content: space-between;
    align-items: center;
    font-family: "Gilroy Light";
    width: 40%;
  }
`;

export default AboveFooter;