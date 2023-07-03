import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { add, remove } from "../../redux/features/bagSlice";

export default function ItemInBag({dish}) {

  const dispatch = useDispatch();
  
  const addToBag = (item) => {
    // dispatch a add action
    dispatch(add(item));
  }

  const removeFromBag = (item) => {
    // dispatch a remove action
    dispatch(remove(item));
  }

  return (
    <div className="item-in-bag">
      <div className="item-in-bag-img">
        <img src={dish.image} alt="Item imgage" />
      </div>
      <div className="item-in-bag-field">
        <div className="item-in-bag-top-line">
          <h1>{dish.title}</h1>
          <span>{dish.info}</span>
        </div>
        <div className="item-in-bag-bottom-line">
          <span>€{dish.price.toFixed(2)}</span>
          <div className="item-in-bag-buttons">
            <button onClick={() => removeFromBag(dish)} className="remove-btn">
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span>{dish.units}</span>
            <button onClick={() => addToBag(dish)} className="add-btn">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
