import { GetStaticProps } from "next";
import {fetchProducts, findProductById} from "../utils/wooCommerceApi";
import { Product } from "../utils/types/wooCommerceTypes";
import { ProductGrid } from "../features";
import { NavLayout } from "../layout";
import {ProductCard} from "../containers";
import ProductCardDetail from "../containers/ProductCardDetail/ProductCardDetail";
import {useRouter} from "next/router";

// declare types for the functional component props //
interface Props {
    products: Product[];
}

function getElementFromId(id: number, products: Product[]) {
    for(let product of products) {
        if(product.id === id) return product
    }

    return products[0];
}

function findGetParameter(parameterName: string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { asPath }= useRouter();
    console.log(asPath)
    const url2 = new URL(
        "http://localhost:3000" + asPath
    );
    const id = url2.searchParams.get(parameterName);
    return (id ? parseInt(id) : 0);
}

export default function Home(props: Props) {
    // destructure props //
    const { products } = props;

    // console.log("--WooCommerce Products: ", products);
    return (
        <NavLayout title="Menu" description="Menu page">
            <ProductCardDetail product={getElementFromId(findGetParameter("id"), products)}/>
        </NavLayout>
    );
}

export const getStaticProps: GetStaticProps = async () => {

    const wooCommerceProducts = await fetchProducts().catch((error) =>
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
