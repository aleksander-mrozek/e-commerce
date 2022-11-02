import { gql } from "@apollo/client";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";

import { apolloClient } from "../../graphql/apolloClient";
import { InferGetStaticPathsType } from "../../types";
import { ProductDetails } from "../../components/Product";

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Ups! Something went wrong...</div>;
  }
  return (
    <div>
      <Link href="/products">
        <a>Return to products</a>
      </Link>
      <ProductDetails
        data={{
          id: data.slug,
          title: data.name,
          thumbnailUrl: data.images[0].url,
          thumbnailAlt: data.name,
          description: data.description,
          rating: 5,
          longDescription: data.longDescription,
        }}
      />
    </div>
  );
};

export default ProductIdPage;

export const getStaticPaths = async () => {
  interface GetProductsSlugsResponse {
    products: Product[];
  }
  interface Product {
    slug: string;
  }
  const { data } = await apolloClient.query<GetProductsSlugsResponse>({
    query: gql`
      query GetProductsSlugs {
        products {
          slug
        }
      }
    `,
  });
  return {
    paths: data.products.map((product) => {
      return {
        params: {
          productId: product.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }
  interface GetProductDetailsBySlugResponse {
    product: Product;
  }

  interface Product {
    slug: string;
    name: string;
    price: number;
    description: string;
    images: Image[];
  }

  interface Image {
    url: string;
  }
  const { data } = await apolloClient.query<
    GetProductDetailsBySlugResponse,
    { slug: string }
  >({
    variables: {
      slug: params.productId,
    },
    query: gql`
      query GetProductDetailsBySlug($slug: String) {
        product(where: { slug: $slug }) {
          slug
          name
          price
          description
          images {
            url
          }
        }
      }
    `,
  });
  if (!data) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        ...data.product,
        longDescription: await serialize(data.product.description),
      },
    },
  };
};
