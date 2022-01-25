import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import home from "./pages/home";
import work from "./pages/work";
import Contact from "./pages/contact";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CgSmartphoneChip } from "react-icons/cg";
function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(
    () => {
      if (!vantaEffect) {
        setVantaEffect(
          WAVES({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.5,
            scaleMobile: 1.0,
            color: 0x0,
            shininess: 122.0,
            waveSpeed: 1.05
          })
        );
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    },
    [vantaEffect]
  );
  const about = () => {
    return <div>About</div>;
  };

  const services = () => {
    return <div>Services</div>;
  };

  const reload = () => window.location.reload();

  
  return (
    <div className="App" id="bg" ref={myRef}>
      <Router>
        <div>
          <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
              <CgSmartphoneChip color={"white"} fontSize={"2rem"} />
              &nbsp;
              <Navbar.Brand href="#">Portfolio</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/services">Services</NavLink>
                  <NavLink to="/work">Work</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="content">
          <Route exact path="/" component={home} />
          <Route path="/about" component={about} />
          <Route path="/services" component={services} />
          <Route path="/work" component={work} />
          <Route path="/contact" component={Contact} />
          <Route path="/budget_tracker" onEnter={reload} />
          <Route path="/trello" onEnter={reload} />
          <Route path="/food" onEnter={reload} />

        </div>
      </Router>
    </div>
  );
}

export default App;
