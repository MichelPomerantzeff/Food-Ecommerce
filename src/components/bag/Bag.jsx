import React from "react";
import "./Bag.css";
import { dishes } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import ItemInBag from "./ItemInBag";

export default function Bag({closeBag}) {

  return (
    <section className="bag-page">
      <div className="bag-heading">
        <div className="items-qnt">3 items</div>
        <button onClick={() => closeBag(false)} className="close-bag">
            <span>HIDE</span>
            <FontAwesomeIcon className="close-icon" icon={faCircleXmark} />
        </button>
      </div>
      <div className="items-in-bag">
        <ItemInBag dish={dishes.chicken[0]} />
        <ItemInBag dish={dishes.fish[1]} />
        <ItemInBag dish={dishes.chicken[2]} />
        <ItemInBag dish={dishes.beef[0]} />
        <ItemInBag dish={dishes.pasta[2]} />
      </div>
      <div className="order-details">
        <div className="order-detail-field">
          <span className="subtotal">Subtotal</span>
          <span>9.99</span>
        </div>
        <div className="order-detail-field">
          <span className="delivery-fee">Delivery</span>
          <span>9.99</span>
        </div>
        <div className="order-detail-field">
          <span className="total">Total</span>
          <span>9.99</span>
        </div>
        <button className="payment-btn">Payment</button>
      </div>
    </section>
  );
}
