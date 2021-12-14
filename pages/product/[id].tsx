import { GetStaticProps } from "next";
import { fetchProducts, findProductById } from "../../utils/wooCommerceApi";
import { Product } from "../../utils/types/wooCommerceTypes";
import { ProductGrid } from "../../features";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import { ProductCardInfo } from "../../components";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import { useAppDispatch } from "../../store/hooks";
import { addLineItem } from "../../store/slices/cartSlice";
import { NavLayout } from "../../layout";

interface Props {
  product: Product;
}

export default function Home(props: Props) {
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

  console.log(product.images);

  return (
    <NavLayout title="Product" description="Product">
      <Card>
        <ImageContainer>
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            objectFit="cover"
            layout="fill"
          />
        </ImageContainer>
        <ProductCardInfo
          name={product.name}
          price={product.price}
          onClickFunction={handleIncrement}
        />
        <ProductDescription description={product.description} />
      </Card>
    </NavLayout>
  );
}

export async function getStaticPaths() {
  const { data: products } = await fetchProducts();

  const paths = products.map((product) => ({
    params: { id: `${product.id}` },
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params);
  const product = await findProductById(params.id).catch((error) =>
    console.error(error)
  );

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
};

const Card = styled.div`
  width: 80%;
  gap: 1rem;
  margin: 0 auto;
  display: flex;
  padding-left: 100px;
  & ~ & {
    border-top: 1px solid ${(props) => props.theme.colors.divider};
  }
  @media screen and (max-width: 700px) {
    padding: 2rem 0;
    height: auto;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 2/3;
  @media screen and (max-width: 700px) {
    aspect-ratio: 1/1;
  }
`;
