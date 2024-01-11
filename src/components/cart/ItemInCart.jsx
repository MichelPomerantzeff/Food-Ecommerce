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
    <div className="flex gap-2 p-2">
      <div className="max-w-28 h-24 rounded-md overflow-hidden ">
        <img className="h-full w-full object-cover" src={dish.image} alt="" />
      </div>
      <div className="w-full overflow-hidden">
        <div className="mb-2">
          <h1 className="font-bold whitespace-nowrap text-ellipsis overflow-hidden">{dish.title}</h1>
          <span className="text-sm text-gray-400 font-semibold whitespace-nowrap overflow-hidden 
              text-ellipsis cursor-default">{dish.info}</span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center w-1/3 font-semibold">€{dish.price.toFixed(2)}</span>
          <div className="flex items-center justify-around w-2/3">
            <button
              onClick={() => removeFromCart(dish)}
              className="border-2 border-gray-200 rounded px-2 text-blue-400
              hover:border-blue-400 transition"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span>{dish.units}</span>
            <button
              onClick={() => addToCart(dish)}
              className="border-2 border-blue-400 rounded px-2 text-blue-400
              hover:bg-blue-400 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
