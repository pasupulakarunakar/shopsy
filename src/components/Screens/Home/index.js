import Carousle from "../../Carousle";
import Products from "../../Products";

function Home(props) {
  return (
    <>
      <Carousle />
      <Products cartItems={props.cartItems} addToCart={(id, quantity) =>props.addToCart(id, quantity)} />
    </>
  );
}

export default Home;
