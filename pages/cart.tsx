import { NavLayout } from "../layout";
import { useAppSelector } from "../store/hooks";
import { Cart } from "../features";
import styled from "styled-components";

export default function CartPage() {
  const cartState = useAppSelector((state) => state.cart);

  return (
    <NavLayout title="Cart" description="Cart">
      <CartForm>
        <Cart lineItems={cartState.lineItems} />
      </CartForm>
    </NavLayout>
  );
}

const CartForm = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;
