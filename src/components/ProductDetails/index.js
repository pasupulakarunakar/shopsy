import { useParams } from "react-router-dom";
import data from "../data.json";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FormRange from "react-bootstrap/esm/FormRange";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";

export default function ProductDetails() {
  const params = useParams();

  const product = data["products"].find((e) => e.id === parseInt(params.id));
  const [size, setSize] = useState("8");
  const [quantity, setQuantity] = useState("3");

  const handleAddToCart = () => {
    alert(params.id)
  }

  return (
    <Container>
      <Row className="m-5">
        <Col lg={5} style={{ overflow: "hidden" }}>
          <Image
            style={{ height: "75vh" }}
            className="w-100 of-f"
            src={product.image}
          />
        </Col>

        <Col className="ml-5">
            <h1>{product.label}</h1>
            {product.original && (
              <p className="h4 mt-2 mb-3">
                <del>Rs. {product.original}</del>&nbsp;&nbsp;Rs. {product.final_price}
              </p>
            )}
            {!product.original && (
              <p className="h4 mt-2 mb-3">Rs. {product.final_price}</p>
            )}
            Size: {size}{" "}
            <FormRange
              min={0}
              max={15}
              step={1}
              onChange={(e) => setSize(e.target.value)}
            />
            Quantity: {quantity}{" "}
            <FormRange
              min={0}
              max={5}
              step={1}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <p className="mt-4 text-justify">
              <span style={{ fontSize: 14 }}>Description:</span> <br />
              {product.desc}
            </p>
          <Row className="m-2">
            <Button variant="btn btn-outline-success" className="mb-2">Buy Now</Button>
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
