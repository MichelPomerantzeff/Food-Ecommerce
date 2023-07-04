import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../redux/features/cartSlice";

export default function Dish({dish}) {

  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const itemQnt = cartItems.find(item => item.id == dish.id)

  const addToCart = (item) => {
    // dispatch an add function
    dispatch(add(item))
  }

  const removeToCart = (item) => {
    // dispatch an remove function
    dispatch(remove(item))
  }

  return (
    <>
      <div className="slider-item">
        <div className="slide-image">
          <img src={dish.image} alt="Salmple 1" />
        </div>
        <div className="slide-item-description">
          <h2>{dish.title}</h2>
          <span className="slide-item-info">{dish.info}</span>
        </div>
        <div className="slide-item-bottom-line">
          <span className="price">€{dish.price.toFixed(2)}</span>
          <span className="weight">{dish.weight}</span>
          <div className="manage-added-items">
            {itemQnt?.units > 0 && (
              <>
                <div className="remove-button">
                  <button onClick={() => removeToCart(dish)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>

                <div className="item-qnt">
                  <span>{itemQnt?.units}</span>
                </div>
              </>
            )}

            <div className="add-button">
              <button onClick={() => addToCart(dish)}>
                {!itemQnt ? "ADD" : <FontAwesomeIcon icon={faPlus} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
