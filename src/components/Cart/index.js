import { Container, Row, Col, Image } from "react-bootstrap";
import data from "../data.json";
import {Link} from "react-router-dom";

export default function Cart(props) {
  const cartItems = props.cartItems;

  const getTotal = () => {
    let total = 0;
    Object.keys(props.cartItems).forEach((key) => {
      let product = data["products"].find((e) => e.id === parseInt(key));
      total = total + props.cartItems[product.id] * product.final_price;
    });

    return total;
  };

  return (
    <Container className="mb-5">
      <Col>
        <Row>
          <h3 className="text-center mt-5 mb-4">
            Your Cart ({Object.keys(cartItems).length} items)
          </h3>
        </Row>

        <Row className="border-bottom">
          <Col lg={6}>Item</Col>

          <Col lg={2}>Price</Col>

          <Col lg={2}>Quantity</Col>

          <Col lg={2}>Total</Col>
        </Row>

        {cartItems &&
          Object.keys(cartItems).map((key) => {
            let product = data["products"].find((e) => e.id === parseInt(key));

            if (cartItems[key] !== 0) {
              return (
                <Row key={key} className="border-bottom pt-3 pb-3">
                  <Col className="d-flex align-items-center" lg={6}>
                    <Image
                      style={{ width: 60, height: 60, borderRadius: 30 }}
                      src={product.image}
                    />
                    <p className="ml-2 mt-3">{product.label}</p>
                  </Col>

                  <Col className="mt-3" lg={2}>
                    {product.original && product.original}
                    {!product.original && product.price}
                  </Col>

                  <Col className="mt-3" lg={2}>
                    {cartItems[product.id]}
                  </Col>

                  <Col className="mt-3" lg={2}>
                    {cartItems[product.id] * product.price >
                      cartItems[product.id] * product.final_price && (
                      <span>
                        <del>Rs.{cartItems[product.id] * product.price}</del>
                        &nbsp;&nbsp;&nbsp;&nbsp;Rs.
                        {cartItems[product.id] * product.final_price}
                      </span>
                    )}

                    {cartItems[product.id] * product.price ===
                      cartItems[product.id] * product.final_price && (
                      <span>{cartItems[product.id] * product.final_price}</span>
                    )}
                  </Col>
                </Row>
              );
            }

            return "";
          })}

        {Object.keys(cartItems).length > 1 && (
          <>
            <Row className="mt-5">
              <Col lg={6}></Col>

              <Col lg={2}></Col>

              <Col lg={2}>Sub Total</Col>

              <Col lg={2}>Rs. {getTotal()}</Col>
            </Row>

            <Row className="mt-2 border-bottom">
              <Col lg={6}></Col>

              <Col lg={2}></Col>

              <Col lg={2}>Tax</Col>

              <Col lg={2}>Rs. {(getTotal() * 0.18).toFixed(2)}</Col>
            </Row>

            <Row className="mt-2 border-bottom">
              <Col lg={6}></Col>

              <Col lg={2}></Col>

              <Col lg={2}>Total</Col>

              <Col lg={2}>Rs. {getTotal() + getTotal() * 0.18}</Col>
            </Row>

            <Row className="mt-4 ml-5">
              <Col lg={6}></Col>

              <Col lg={2}></Col>

              <Col lg={4}>
                <Link className="btn btn-btn btn-outline-success br-0 w-70" to={"/checkout/"+parseInt(getTotal() + getTotal() * 0.18)}>
                  Checkout
                </Link>
              </Col>
            </Row>
          </>
        )}

        {
            !Object.keys(cartItems).length && (
                <p style={{fontSize: 12, color: "#a2a2a2"}} className="text-center mt-4">There are no items in your cart. Add some products and come back later with exclusive products</p>
            )
        }
      </Col>
    </Container>
  );
}
