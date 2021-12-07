import styled from "styled-components";
import Image from "next/image";
import { Product } from "../../utils/types/wooCommerceTypes";
import { useAppDispatch } from "../../store/hooks";
import { addLineItem } from "../../store/slices/cartSlice";
import { ProductCardInfo } from "../../components";
import ProductDescription from "../../components/ProductDescription/ProductDescription";

interface Props {
    product: Product;
}

const ProductCardDetail = (props: Props) => {
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

    return (
        <Card>
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
            <ProductDescription description={product.description}/>
        </Card>
    );
};

export default ProductCardDetail;

const Card = styled.div`
  width: 30vw;
  height: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 50%;
  height: 50%;
`;
