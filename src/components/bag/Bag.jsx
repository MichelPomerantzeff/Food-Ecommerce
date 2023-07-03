import React, { useEffect } from "react";
import "./Bag.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import ItemInBag from "./ItemInBag";
import { useSelector } from "react-redux";
import { emptyBox } from '../../data/data';

export default function Bag({closeBag}) {

  const bagItems = useSelector(state => state.bag);

  const bagUnits = bagItems?.reduce((acc, cur) => {
    return cur.units + acc
  }, 0)

  return (
    <section className="bag-page">
      <div className="bag-heading">
        {
          bagItems.length > 0 ?
          <div className="items-qnt">{bagUnits} {bagUnits > 1 ? 'items' : 'item'}</div>
          :
          <div className="empty"></div>
        }
        <button onClick={() => closeBag(false)} className="close-bag">
            <span>CLOSE</span>
            <FontAwesomeIcon className="close-icon" icon={faCircleXmark} />
        </button>
      </div>
      <div className="items-in-bag">

        {
          bagItems.length > 0 ?
          bagItems?.map(item => {
            return(
              <ItemInBag key={item.id} dish={item} />
              )
            })
            :
            <div className="empty-box">
            <img src={emptyBox} alt="EMPTY BOX" />
            <span>YOUR BAG IS EMPTY</span>
          </div>
        }

      </div>
      {
        bagItems.length > 0 &&
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
      }
    </section>
  );
}
