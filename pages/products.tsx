import { gql } from "@apollo/client";
import { InferGetStaticPropsType } from "next";

import { ProductListItem } from "../components/Product";
import { apolloClient } from "../GraphQL/apolloClient";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.products.map((product) => {
        return (
          <li key={product.id} className="shadow-xl border-2">
            <ProductListItem
              data={{
                id: product.id,
                title: product.name,
                thumbnailUrl: product.images[0].url,
                thumbnailAlt: product.name,
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsPage;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetProductsListResponse>({
    query: gql`
      query GetProductsList {
        products {
          id
          slug
          name
          price
          images(first: 1) {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
  };
};

export interface GetProductsListResponse {
  products: Product[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  images: Image[];
}

export interface Image {
  url: string;
}
