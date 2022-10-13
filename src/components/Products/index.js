import Product from "../Product";
import res from "../data.json";
import { useNavigate } from "react-router-dom";

export default function Products(props) {
  const history = useNavigate();

  return (
    <div className="products">
      {res &&
        res.products.map((element) => {
          return (
            <Product
              addToCart={(id, quantity) => {
                props.addToCart(id, quantity);
              }}
              click={() => history(`/product/${element.id}`)}
              key={element.id}
              {...element}
              cartItems={props.cartItems}
              inCart={Object.keys(props.cartItems).includes(parseInt(element.id))}
            />
          );
        })}
    </div>
  );
}
