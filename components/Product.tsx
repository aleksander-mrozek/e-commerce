import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";

import { Rating } from "./Rating";
import { WebsiteReactMarkdown } from "./WebsiteReactMarkdown";
import { MarkdownResult } from "../types";
import { useCartState } from "./Cart/CartContext";
import { ProductReviewContainer } from "./ProductReview/ProductReviewContainer";

interface ProductDetails {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
  longDescription: MarkdownResult;
}

interface ProductProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <>
      <div className="bg-white p-4">
        <NextSeo
          title={data.title}
          description={data.description}
          canonical={`https://naszsklep-api.vercel.app/api/products/${data.id}`}
          openGraph={{
            url: `https://naszsklep-api.vercel.app/api/products/${data.id}`,
            title: data.title,
            description: data.description,
            images: [
              {
                url: data.thumbnailUrl,
                alt: data.thumbnailAlt,
                type: "image/jpeg",
              },
            ],
            site_name: "E-commerce",
          }}
        />
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
        />
      </div>
      <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      <p className="p-4">{data.description}</p>
      <article className="p-4 prose lg:prose-xl">
        <WebsiteReactMarkdown>{data.longDescription}</WebsiteReactMarkdown>
      </article>
      <Rating rating={data.rating} />
      <ProductReviewContainer productSlug={data.slug} />
    </>
  );
};

type ProductListItem = Pick<
  ProductDetails,
  "id" | "title" | "thumbnailUrl" | "thumbnailAlt"
>;

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  const cartState = useCartState();
  return (
    <>
      <div className="bg-white p-4">
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
        />
      </div>
      <div className="p-4">
        <Link href={`/products/${data.id}`}>
          <a>
            <h2 className="pb-4 text-3xl font-bold">{data.title}</h2>
          </a>
        </Link>
        <button
          onClick={() => {
            cartState.addItemToCart({
              id: data.id,
              price: 99.99,
              title: data.title,
              count: 1,
            });
          }}
          className="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] focus:outline-none focus:ring active:text-opacity-75"
        >
          <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:text-white hover:bg-transparent active:text-gray-500">
            Add to cart
          </span>
        </button>
      </div>
    </>
  );
};
