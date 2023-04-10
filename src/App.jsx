import { useState, useRef, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Cursor from "./components/CustomCursor/Cursor";
import CustomCursor from "./components/CustomCursor/CourserContext";
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./components/Home/Home";
import Preloader from "./components/subComponents/Preloader";
import gsap from "gsap";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Projects from "./components/Project/Projects";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";

function App() {
  const [viewProject, setViewProject] = useState("");
  const [scrollbar, setScrollbar] = useState(null);

  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const LocoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      scrollFromAnywhere: true,
      reloadOnContextChange: true,
      smartphone: {
        smooth: true,
      },
      tablet: { smooth: true },
      repeat: true,
    });

    new ResizeObserver(() => LocoScroll.update()).observe(
      document.querySelector("[data-scroll-container]")
    );

    setScrollbar(LocoScroll);
  }, []);

  useEffect(() => {
    if (scrollbar !== null) {
      scrollbar.update();
      setTimeout(() => {
        scrollbar.scrollTo("top", {
          offset: 0,
          duration: 600,
          easing: [0.25, 0.0, 0.35, 1.0],
          disableLerp: true,
        });
      }, 1000);
    }
  }, [location]);

  return (
    <>
      <Preloader />

      <Navbar setViewProject={setViewProject} />
      <Cursor viewProject={viewProject} />
      <div className="bg"></div>
      <CustomCursor.Provider value={viewProject}>
        <Container
          ref={scrollRef}
          className="scrollContainer"
          data-scroll-container
        >
          <AnimatePresence initial={false} mode={"wait"}>
            <Routes location={location} key={location.pathname}>
              <Route
                exact
                path="/"
                element={<Home setViewProject={setViewProject} />}
              />
              <Route
                exact
                path="/about"
                element={<About setViewProject={setViewProject} />}
              />
              <Route
                exact
                path="/projects"
                element={<Projects setViewProject={setViewProject} />}
              />
              <Route
                exact
                path="/projects/:projectName"
                element={<Project setViewProject={setViewProject} />}
              />
              <Route
                exact
                path="/contact"
                element={<Contact setViewProject={setViewProject} />}
              />
              {/* <Route
                exact
                path="/login"
                element={<Login setViewProject={setViewProject} />}
              /> */}
              {/* <Route
                exact
                path="/admin"
                element={<Admin setViewProject={setViewProject} />}
              /> */}
              {/* <Route exact path="*" element={<ErrorPage />} /> */}
            </Routes>
          </AnimatePresence>
        </Container>
      </CustomCursor.Provider>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
`;

export default App;
