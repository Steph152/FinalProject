import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">GreenThumb</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <NavDropdown title="My Nursery" id="basic-nav-dropdown">
              <NavDropdown.Item href="/logIn">Log In</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My Info</NavDropdown.Item>
              <NavDropdown.Item href="/enterPlants">Enter Plants</NavDropdown.Item>
              <NavDropdown.Item href="/update">Update Plants</NavDropdown.Item>
              <NavDropdown.Item href="/read">My Plants</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNav;