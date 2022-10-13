import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Product(props) {
  const [inCart, setInCart] = useState(
    Object.keys(props.cartItems).includes(props.id.toString())
  );
  const [quantity, setQuantity] = useState(props.cartItems[props.id]);

  const decrementQuantity = () => {
    if(quantity > 0) {
      setQuantity(quantity - 1)
      props.addToCart(props.id, quantity-1)
    }
  }

  const incrementQuantity = () => {
    if(quantity >= 0) {
      setQuantity(quantity + 1)
      props.addToCart(props.id, quantity+1)
    }
  }

  return (
    <div className="product">
      <img
        onClick={props.click}
        src={props.image}
        alt=""
        className="product-img"
      />
      <div onClick={props.click} className="product-details">
        <p className="product-label">{props.label}</p>
        <p className="product-desc">{props.desc}</p>
        <p className="product-price">
          {props.original && (
            <>
              <del>Rs. {props.original}</del>&nbsp;&nbsp;Rs. {props.final_price}
            </>
          )}
          {!props.original && <>Rs. {props.final_price}</>}
        </p>
      </div>
      {!inCart && (
        <div
          style={{ justifyContent: "space-between" }}
          className="product-btns w-90 d-flex align-items-center mt-4"
        >
          <Button style={{ borderRadius: 0 }} variant="outline-primary w-45">
            Buy
          </Button>
          <Button
            onClick={() => {
              props.addToCart(props.id, 1);
              setInCart(true);
              setQuantity(1);
            }}
            style={{ borderRadius: 0 }}
            variant="outline-success w-45"
          >
            Add to cart
          </Button>
        </div>
      )}

      {inCart && (
        <div
          style={{ justifyContent: "space-between" }}
          className="product-btns w-90 d-flex align-items-center mt-4"
        >
          <Button
            onClick={() => decrementQuantity()}
            style={{ borderRadius: 0 }}
            variant="outline-primary w-5"
          >
            -
          </Button>
          <span>{quantity}</span>
          <Button
            style={{ borderRadius: 0 }}
            variant="outline-success w-5"
            onClick={() => incrementQuantity()}
          >
            +
          </Button>
        </div>
      )}
    </div>
  );
}
