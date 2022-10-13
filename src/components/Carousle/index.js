import React from "react";
import Carousel from "react-bootstrap/Carousel";
import res from "../data.json";

function Carousle() {
  return (
    <Carousel
      style={{ height: "70vh", overflow: "hidden", background: "red" }}
      className="w-100"
      pause={false}
    >
      {res &&
        res.offers.map((element) => {
          return (
            <Carousel.Item key={element.id} className="w-100">
              <img
                style={{ height: "70vh" }}
                className="d-block w-100 bg-primary"
                src={element.image}
                alt={element.label}
              />
              <Carousel.Caption>
                <h3>{element.label}</h3>
                <p>{element.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
}

export default Carousle;
