import PaymentForm from '../../components/payment/PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';

export default function PaymentPage() {

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  const cartItems = useSelector(state => state.cart);

  const options = {
    mode: 'payment',
    currency: 'eur',
    amount: (cartItems.totalPrice * 100),
  }

  return (
    <Elements stripe={stripePromise} options={options} >
      <PaymentForm />
    </Elements>
  )
}
