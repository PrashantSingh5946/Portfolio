import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, NavLink, Route } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
function App() {
  const home = () => {
    return <div>Home</div>;
  };
  const about = () => {
    return <div>About</div>;
  };
  const contact = () => {
    return <div>Contact</div>;
  };
  const services = () => {
    return <div>Services</div>;
  };
  const work = () => {
    return <div>Work</div>;
  };
  return (
    <div className="App">
      <HashRouter>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#">Portfolio</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                  <NavLink to="/" className="active">
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
          <Route path="/contact" component={contact} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
