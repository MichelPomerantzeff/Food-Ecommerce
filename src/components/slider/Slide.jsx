import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Slide(props) {

    const [itemQnt, setItemQnt] = useState(0);

  return (
    <>
      <div className="slider-item">
        <div className="slide-image">
          <img src={props.dish.image} alt="Salmple 1" />
        </div>
        <div className="slide-item-description">
          <h2>{props.dish.title}</h2>
          <span className="slide-item-info">{props.dish.info}</span>
        </div>
        <div className="slide-item-bottom-line">
          <span className="price">${props.dish.price}</span>
          <span className="weight">{props.dish.weight}</span>
          <div className="manage-added-items">
            {itemQnt > 0 && (
              <>
                <div className="remove-button">
                  <button onClick={() => setItemQnt(itemQnt - 1)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>

                <div className="item-qnt">
                  <span>{itemQnt}</span>
                </div>
              </>
            )}

            <div className="add-button">
              <button onClick={() => setItemQnt(itemQnt + 1)}>
                {itemQnt < 1 ? "ADD" : <FontAwesomeIcon icon={faPlus} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
