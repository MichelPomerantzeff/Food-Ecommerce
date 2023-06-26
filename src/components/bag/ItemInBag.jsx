import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ItemInBag(props) {
  return (
    <div className="item-in-bag">
      <div className="item-in-bag-img">
        <img src={props.dish.image} alt="Item imgage" />
      </div>
      <div className="item-in-bag-field">
        <div className="item-in-bag-top-line">
          <h1>{props.dish.title}</h1>
          <span>{props.dish.info}</span>
        </div>
        <div className="item-in-bag-bottom-line">
          <span>{props.dish.price}</span>
          <div className="item-in-bag-buttons">
            <button className="decrease-btn">
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span>3</span>
            <button className="increase-btn">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
