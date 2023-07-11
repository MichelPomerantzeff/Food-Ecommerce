import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { add, remove } from "../../redux/features/cartSlice";

export default function ItemInCart({ dish }) {

  const dispatch = useDispatch();

  const addToCart = (item) => {
    // dispatch a add action
    dispatch(add(item));
  }

  const removeFromCart = (item) => {
    // dispatch a remove action
    dispatch(remove(item));
  }

  return (
    <div className="item-in-cart">
      <div className="item-in-cart-img">
        <img src={dish.image} alt="Item imgage" />
      </div>
      <div className="item-in-cart-field">
        <div className="item-in-cart-top-line">
          <h1>{dish.title}</h1>
          <span>{dish.info}</span>
        </div>
        <div className="item-in-cart-bottom-line">
          <span>€{dish.price.toFixed(2)}</span>
          <div className="item-in-cart-buttons">
            <button onClick={() => removeFromCart(dish)} className="remove-btn">
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span>{dish.units}</span>
            <button onClick={() => addToCart(dish)} className="add-btn">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
