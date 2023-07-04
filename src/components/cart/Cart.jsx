import React, { useEffect, useState } from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ItemInCart from "./ItemInCart";
import { useDispatch, useSelector } from "react-redux";
import { emptyBox } from '../../data/data';
import { reset } from "../../redux/features/cartSlice";

export default function Cart({closeCart}) {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  const [discount, setDiscount] = useState(0)

  const subTotal = cartItems?.reduce((acc, cur) => {
    return (cur.price * cur.units) + acc
  }, 0)

  const cartUnits = cartItems?.reduce((acc, cur) => {
    return cur.units + acc
  }, 0)

  useEffect(() => {
    if(subTotal < 50) {
      setDiscount(0)
    }else {
      setDiscount(subTotal*0.1)
    }
  }, [subTotal]);

  const clearCart = () => {
    dispatch((reset()))
  }

  return (
    <section className="cart-page">
      <div className="cart-heading">
        {
          cartItems.length > 0 ?
          <div className="items-qnt">{cartUnits} {cartUnits > 1 ? 'items' : 'item'}</div>
          :
          <div className="empty"></div>
        }
        <button onClick={() => closeCart(false)} className="close-cart">
            <span>CLOSE</span>
            <FontAwesomeIcon className="close-icon" icon={faCircleXmark} />
        </button>
      </div>
      <div className="items-in-cart">

        {
          cartItems.length > 0 &&
          <button className="remove-all" onClick={clearCart}>Remove all</button>
        }

        {
          cartItems.length > 0 ?
          cartItems?.map(item => {
            return(
              <ItemInCart key={item.id} dish={item} />
              )
            })
            :
            <div className="empty-box">
            <img src={emptyBox} alt="EMPTY BOX" />
            <span>YOUR CART IS EMPTY</span>
          </div>
        }

      </div>
      {
        cartItems.length > 0 &&
        <div className="order-details">
          <div className="order-detail-field">
            <span className="subtotal">Subtotal</span>
            <span>€{subTotal.toFixed(2)}</span>
          </div>
          <div className="order-detail-field">
            <span className="delivery-fee">Discount</span>
            <span>€{discount > 0 ? discount.toFixed(2) : 0}</span>
          </div>
          <div className="order-detail-field">
            <span className="total">Total</span>
            <span>€{(subTotal - discount).toFixed(2)}</span>
          </div>
          <button className="payment-btn">Payment</button>
        </div>
      }
    </section>
  );
}
