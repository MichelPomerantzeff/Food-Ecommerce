import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../redux/features/cartSlice";
import './Card.css';

export default function Card({ dish }) {

  const cartItems = useSelector(state => state.cart);
  const item = cartItems.cartItems?.find(item => item.id == dish.id);
  const dispatch = useDispatch();

  const addToCart = (item) => {
    // dispatch an add function
    dispatch(add(item))
  };

  const removeToCart = (item) => {
    // dispatch an remove function
    dispatch(remove(item))
  };

  return (
    <>
      <div className="border border-gray-300 rounded">
        <div className="">
          <img src={dish.image} alt="Card image" />
        </div>
        <div className="flex flex-col gap-2 p-1 md:p-2">
          <div className="">
            <h2
              className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis cursor-default"
              title={dish.title}
            >
              {dish.title}
            </h2>
            <p
              className="text-xs text-gray-500 font-semibold whitespace-nowrap overflow-hidden 
              text-ellipsis cursor-default"
              title={dish.info}
            >
              {dish.info}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-2 items-center">
            <div className="flex justify-between">
              <span className="text-sm font-semibold">€{dish.price.toFixed(2)}</span>
              <span className="text-sm font-semibold">{dish.weight}</span>
            </div>
            <div className="relative h-[30px]">
              <div className="flex justify-between">
                <div
                  className="absolute left-0 flex justify-center w-1/3 border-2 border-blue-400 text-blue-400 
                  rounded cursor-pointer hover:bg-blue-400 hover:text-white"
                >
                  <button className="grow" onClick={() => removeToCart(dish)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
                <div className="absolute left-1/2">
                  <span>{item?.units}</span>
                </div>
                <div
                  className="bg-white absolute right-0 flex justify-center w-1/3 border-2 border-blue-400 
                    text-blue-400 font-semibold rounded cursor-pointer z-10 transition-width duration-300 ease-in-out
                    hover:bg-blue-400 hover:text-white"
                  style={!item?.units > 0 ? { width: "100%" } : {}}
                >
                  <button className="grow" onClick={() => addToCart(dish)}>
                    {!item?.units > 0 ? "ADD" : <FontAwesomeIcon icon={faPlus} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
