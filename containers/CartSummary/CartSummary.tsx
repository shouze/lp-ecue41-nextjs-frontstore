import styled from "styled-components";
import CartSummaryLine from "../../components/CartSummaryLine/CartSummaryLine";
import { LineItem } from "../../utils/types/wooCommerceTypes";
import { computeTotalPrice } from "../../utils/prices";

interface Props {
  lineItems: LineItem[];
}

const CartSummary = (props: Props) => {

  return (
    <Wrapper>
      <CartSummaryLine
        title="Total"
        price={computeTotalPrice(props.lineItems)}
      />
    </Wrapper>
  );
};

export default CartSummary;

const Wrapper = styled.div`
  width: 100%;
  padding: 16px 0;
`;
