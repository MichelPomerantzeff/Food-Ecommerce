import "./Cart.css";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import ItemInCart from "./ItemInCart";
import { useDispatch, useSelector } from "react-redux";
import { emptyBox } from '../../data/data';
import { reset } from "../../redux/features/cartSlice";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

export default function Cart({ closeCart }) {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const clearCart = () => {
    dispatch((reset()))
  }

  return (
    <section className="cart-page">
      <div className="cart-heading">
        {
          cartItems.cartItems?.length > 0 ?
            <div className="items-qnt">{cartItems.totalItems} {cartItems.totalItems > 1 ? 'items' : 'item'}</div>
            :
            <div className="empty"></div>
        }
        <button onClick={() => closeCart(false)} className="close-cart">
          <span>CLOSE</span>
          <CancelRoundedIcon className="close-icon" />
        </button>
      </div>
      <div className="items-in-cart">

        {
          cartItems.cartItems?.length > 0 &&
          <button className="remove-all" onClick={clearCart}>Remove all</button>
        }

        {
          cartItems.cartItems?.length > 0 ?
            cartItems.cartItems?.map(item => {
              return (
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
        cartItems.cartItems?.length > 0 &&
        <div className="order-details">
          <div className="order-detail-field">
            <span className="subtotal">Subtotal</span>
            <span>€{cartItems.totalPrice}</span>
          </div>
          <div className="order-detail-field">
            <span className="delivery-fee">Discount</span>
            <span>€{(cartItems.totalPrice * cartItems.discount).toFixed(2)}</span>
          </div>
          <div className="order-detail-field">
            <span className="total">Total</span>
            <span>€{(cartItems.totalPrice - (cartItems.totalPrice * cartItems.discount)).toFixed(2)}</span>
          </div>
          {
            user ?
            <button onClick={() => navigate('/payment')} className="payment-btn">Checkout</button>
            :
            <button onClick={() => navigate('/sign-in')} className="payment-btn">Login</button>
          }
        </div>
      }
    </section>
  );
}
