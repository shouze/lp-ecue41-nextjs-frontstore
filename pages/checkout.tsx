import { NavLayout } from "../layout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardPayment } from "../containers";
import { useAppSelector } from "../store/hooks";
import styled from "styled-components";

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);

export default function Checkout() {
  const lineItems = useAppSelector((state) => state.cart.lineItems);

  console.log(lineItems);
  return (
    <NavLayout title="Checkout" description="Checkout">
      <PaymentForm>
        <Elements stripe={stripePromise}>
          <CardPayment lineItems={lineItems} />
        </Elements>
      </PaymentForm>
    </NavLayout>
  );
}

const PaymentForm = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;
