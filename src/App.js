import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Experience from "./Experience.js";
import Container from "react-bootstrap/Container";
import About from "./About.js";
import Intro from "./Intro.js";
import Blog from "./Blog.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./contact";

function App() {
  return (
    <div className="Background">
      <BrowserRouter>
        <div className="Header">
          <Navbar className="color-nav" variant="light" fixed="top">
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="About">ABOUT</Nav.Link>
                <Nav.Link href="Work">WORK</Nav.Link>
                <Nav.Link href="Blog">BLOG</Nav.Link>
                <Nav.Link href="Contact">CONTACT</Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link href="https://www.linkedin.com/in/wiselynatalia/">
                  <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                </Nav.Link>
                <Nav.Link href="https://www.instagram.com/wiselynatalia/">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/Work" element={<Experience />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
