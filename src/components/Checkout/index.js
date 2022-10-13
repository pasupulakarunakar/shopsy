import { Container, Col, Row, Form } from "react-bootstrap";
import {useParams, Link} from "react-router-dom";

export default function Checkout(props) {

    const params = useParams()

  return (
    <Container className="mt-5 mb-3">
      <Col>
        <Row>
          <h2 className="text-center">Billing Details</h2>
        </Row>

        <Row className="d-flex align-items-center justify-content-center mt-4">
          <Col lg={5}>
            <Form.Group controlId="firstName">
              <Form.Label className="ml-1">First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
          </Col>

          <Col lg={5}>
            <Form.Group controlId="lastName">
              <Form.Label className="ml-1">Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center mt-3">
          <Col lg={5}>
            <Form.Group controlId="mobile">
              <Form.Label className="ml-1">Mobile</Form.Label>
              <Form.Control type="mobile" placeholder="Mobile" />
            </Form.Group>
          </Col>

          <Col lg={5}>
            <Form.Group controlId="email">
              <Form.Label className="ml-1">Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center mt-3">
          <Col lg={10}>
            <Form.Group controlId="address">
              <Form.Label className="ml-1">Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: 1-23-456, XYZ street"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center mt-3">
          <Col lg={5}>
            <Form.Group controlId="City">
              <Form.Label className="ml-2">Town/City</Form.Label>
              <Form.Control type="text" placeholder="Town/City" />
            </Form.Group>
          </Col>

          <Col lg={5}>
            <Form.Group controlId="Zipcode">
              <Form.Label className="ml-2">Zipcode</Form.Label>
              <Form.Control type="number" placeholder="Zipcode" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center mt-3">
          <Col lg={5}>
            <Form.Group controlId="state">
              <Form.Label className="ml-2">State</Form.Label>
              <Form.Control type="text" placeholder="State" />
            </Form.Group>
          </Col>

          <Col lg={5}>
            <Form.Group controlId="country">
              <Form.Label className="ml-2">Country</Form.Label>
              <Form.Control type="text" placeholder="Country" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center mt-5">
          <Col className="d-flex align-items-center justify-content-center">
            <Form.Group controlId="paymentmethod">
              <Form.Check type="radio" label="Cash on delivery" defaultChecked />
            </Form.Group>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center mt-5">
            <Col lg={10}>
                <Link to="/orders" onClick={() => {props.addOrder()}} className="btn btn-outline-primary w-100">Place Order&nbsp;&nbsp; (Rs. {params.total})</Link>
            </Col>
        </Row>
      </Col>
    </Container>
  );
}
