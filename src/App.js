import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home';
import Companies from './Companies';

function App() {
  return (
    <>
    <div className='ch-container'>
      <Navbar collapseOnSelect expand="lg" className="ch-background-color" variant='dark'>
          <Container>
            <Navbar.Brand as={Link} to='/' className='text-decoration-none link-light'>
                CHandbook
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to='/companies' className='custom-muted-link'>
                    Companies
                </Nav.Link>
                <Nav.Link as={Link} to='/companies' className='custom-muted-link'>
                      Join
                </Nav.Link>
                <NavDropdown title="Details" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  Login 
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/companies' element={<Companies/>}/>
        </Routes>
    </div>
    <footer className='ch-footer'>
      <Container className="text-center">
        <small>
          © {new Date().getFullYear()} Company Handbook. All rights reserved.
        </small>
      </Container>
    </footer>
    </>

  );
}

export default App;
