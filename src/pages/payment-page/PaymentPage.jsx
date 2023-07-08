import PaymentForm from '../../components/payment/PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';

export default function PaymentPage() {

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  const cartItems = useSelector(state => state.cart);
  const total = cartItems.reduce((acc, cur) => ((cur.price * cur.units) + acc), 0);

  const options = {
    mode: 'payment',
    currency: 'eur',
    amount: (total * 100),
  }

  return (
    <Elements stripe={stripePromise} options={options} >
      <PaymentForm />
    </Elements>
  )
}
