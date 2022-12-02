import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link,Outlet} from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid >
        <Navbar.Brand  className='text-danger fw-bold fs-3' href="#">AnimeWatch</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0 fw-bold"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link href="/" className='ms-5 text-light link1'>Home</Nav.Link>
            <Nav.Link href="/Anime" className='ms-5 text-light link1'>Anime</Nav.Link>
            <Nav.Link href="/Movie" className='ms-5 text-light link1'>Movie</Nav.Link>
            <Nav.Link href="/Manga" className='ms-5 text-light link1'>Manga</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;