import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Subtotal from "./Subtotal";
import "./Checkout.css";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout__page">
      {basket.length === 0 ? (
        <div className="emptyCartBackground">
          <img
            src="https://media.sweetwater.com/cart/case.png"
            alt="guitar case"
            className="emptyGuitarCase"
          />
          <div className="emptyCartFeedback">
            <h2>Your Cart is Empty!</h2>
            <h4>Need some ideas? Go to Guitars!</h4>
          </div>
        </div>
      ) : (
        <div className="checkout__container">
          <div className="col1">
            <div className="col1__cart">
              <ShoppingCartIcon />
            </div>
            <h2>Shopping Cart</h2>
          </div>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              img={item.img}
              name={item.name}
              description={item.description}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      )}
      {basket.length > 0 && <Subtotal />}
    </div>
  );
};

export default Checkout;
