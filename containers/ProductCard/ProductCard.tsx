import styled from "styled-components";
import Image from "next/image";
import { Product } from "../../utils/types/wooCommerceTypes";
import { useAppDispatch } from "../../store/hooks";
import { addLineItem } from "../../store/slices/cartSlice";
import { ProductCardInfo } from "../../components";


interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  const { product } = props;

  const dispatch = useAppDispatch();

  const lineItem = {
    name: product.name,
    product_id: product.id,
    quantity: 1,
    price: product.regular_price,
  };

  const handleIncrement = () => {
    dispatch(addLineItem(lineItem));
  };
  function redirection() {
    document.location.href = "/detail/?id="+product.id
  }

  return (
    <Card onClick={redirection}>
      <ImageContainer>
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          objectFit="cover"
          layout={"fill"}
        />
      </ImageContainer>
      <ProductCardInfo
        name={product.name}
        price={product.price}
        onClickFunction={handleIncrement}
      />
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  height:250px;
  padding:20px;
  width:80%;
  gap:1rem;
  margin:0 auto;
  display:flex;
  padding-left:100px;

  & ~ & {
    border-top:1px solid ${(props) => props.theme.colors.divider};

  }

  @media screen and (max-width: 700px){
    padding:2rem 0;
    height: auto;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 2/3;
  @media screen and (max-width: 700px){
    aspect-ratio: 1/1;
  }
`;
