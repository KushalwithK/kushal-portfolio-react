import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import AboveFooter from "../subComponents/AboveFooter";
import Footer from "../Footer/Footer";
import { baseUrl, contact } from "../services/Provider";
import axios from "axios";

const Contact = () => {

  const [contactDetails, setContactDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    messageBody: ""
  });

  const handleFormSubmissionClick = (event) => {
    event.preventDefault()
    console.log(contactDetails)
    axios.post(baseUrl + contact, contactDetails).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      <Container data-scroll-section>
        <div className="content">
          <div className="form">
            <span className="heading">Send a hi!</span>
            <form>
              <div className="name input">
                <div className="firstName label">
                  <span>
                    <span className="bold">01 </span>First Name
                  </span>
                  <input
                    className="form-input"
                    type="text"
                    name="fName"
                    id="firstName"
                    onChange={(event) => {
                      setContactDetails({ ...contactDetails, firstName: event.target.value })
                    }}
                  />
                </div>
                <div className="lastName label">
                  <span>
                    <span className="bold">1.5 </span>Last Name
                  </span>
                  <input
                    className="form-input"
                    type="text"
                    name="fName"
                    id="lastName"
                    onChange={(event) => {
                      setContactDetails({ ...contactDetails, lastName: event.target.value })
                    }}
                  />
                </div>
              </div>
              <div className="email label input">
                <span>
                  <span className="bold">02 </span>Email Address
                </span>
                <input
                  className="form-input"
                  type="text"
                  name="email"
                  id="userEmail"
                  onChange={(event) => {
                    setContactDetails({ ...contactDetails, email: event.target.value })
                  }}
                />
              </div>
              <div className="subject label input">
                <span>
                  <span className="bold">03 </span>Subject
                </span>
                <input
                  className="form-input"
                  type="text"
                  name="subject"
                  id="userSubject"
                  onChange={(event) => {
                    setContactDetails({ ...contactDetails, subject: event.target.value })
                  }}
                />
              </div>
              <div className="body label input">
                <span>
                  <span className="bold">04 </span>Body
                </span>
                <textarea id="userBody" name="body" rows="10" autoComplete="off" onChange={(event) => {
                  setContactDetails({ ...contactDetails, messageBody: event.target.value })
                }}></textarea>
              </div>
              <button className="send" type="submit" onClick={handleFormSubmissionClick}>
                <span className="text">Send message</span>
                <span className="arrow">
                  <FiArrowRight />
                </span>
              </button>
            </form>
          </div>
          <div className="maps">
            <div className="gMaps"></div>
          </div>
        </div>
      </Container>
      <AboveFooter />
      <Footer />
    </>
  );
};

const Container = styled.div`
  margin: 0 5rem;

  .content {
    padding-top: 8rem;
    display: flex;
    flex-direction: column;
    .form {
      width: 25vw;

      form {
        input,
        textarea {
          display: flex;
          width: 100%;
          resize: vertical;
        }

        .firstName {
          margin-right: 1rem;
        }

        .lastName {
          margin-left: 1rem;
        }
      }

      .form-input,
      textarea {
        margin-top: 0.5rem;
        padding: 1rem;
        background-color: #1a1a1a;
        border-radius: 0.5rem;
        border: 2px solid #2e2e2e;
        color: white;
        font-family: "Gilroy regular";
      }

      .heading {
        font-family: "Gilroy Thin";
        font-size: 3rem;
      }
      .input {
        margin-top: 2rem;
      }

      .name {
        display: flex;
        justify-content: space-between;
      }

      .label {
        font-family: "Gilroy light";
        font-size: 1.4rem;
        width: 100%;
        color: #bebebe;

        .bold {
          font-family: "Gilroy regular";
        }
      }
      .send {
        margin-top: 2rem;
        background-color: transparent;
        width: 100%;
        border: 2px solid #2e2e2e;
        color: #c2c2c2;
        font-family: "Gilroy regular";
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 0.5rem;
        font-size: 1.3rem;
        transition: all 0.35s ease-in;

        .arrow {
          display: flex;
          svg {
            margin-bottom: 0;
          }
        }

        &:hover {
          border: 2px solid white;
          color: #e6e6e6;
        }
      }
    }

    .maps {
      height: 100%;
      width: 75vw;
      .gMaps {
        border-radius: 1rem;
        background-color: #1d1d1d;
      }
    }
  }
`;

export default Contact;
