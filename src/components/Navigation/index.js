import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import {Link} from "react-router-dom"
import "../Framework.css";

function Navigation() {
  return (
    <Navbar expand="md" className="mt-2 mb-2 navBar">
      <Container fluid>
        <Navbar.Brand className="nav-brand" href="#">
          <div className="logo"></div>
          <span className="ml-5">SHOPSY</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              Shopsy
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="justify-content-end flex-grow-1 pe-3 fs-14"
            >
              <Link className="ml-3 nav-link" to="/">
                Home
              </Link>
              <Link className="ml-3 nav-link" to="products">
                Products
              </Link>
              <Link className="ml-3 nav-link" to="orders">
                Orders
              </Link>
              <Link className="ml-3 nav-link" to="cart">
                Cart
              </Link>
            </Nav>
            <Form className="d-flex w-30 fs-14">
              <Form.Control
                type="search"
                placeholder="Search"
                className="rounded-0 fs-14"
                aria-label="Search"
              />
              <Button className="rounded-0 fs-14" variant="outline-success">
                Search
              </Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
