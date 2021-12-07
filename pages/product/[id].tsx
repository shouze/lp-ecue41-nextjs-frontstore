import { GetStaticProps } from "next";
import { fetchProducts, findProductById } from "../../utils/wooCommerceApi";
import { Product } from "../../utils/types/wooCommerceTypes";
import { ProductGrid } from "../../features";
import { NavLayout } from "../../layout";
import { useRouter } from 'next/router'


// declare types for the functional component props //
interface Props {
  products: Product[];
}

export default function Home(props: Props) {
  // destructure props //
  const { products } = props;

  // console.log("--WooCommerce Products: ", products);

  return (
    <NavLayout title="Menu" description="Menu page">
      <span>test</span>
    </NavLayout>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const products = await fetchProducts();

  return {
    paths: [
      { params: { id: products.id } } // See the "paths" section below
    ],
    fallback: true // See the "fallback" section below
  };
}


export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context);
  const wooCommerceProducts = await findProductById(params.id).catch((error) =>
    console.error(error)
  );

  if (!wooCommerceProducts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: wooCommerceProducts.data,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
};