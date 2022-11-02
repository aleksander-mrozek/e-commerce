import Image from "next/image";

interface ProductCSR {
  title: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
}

interface ProductCSRListItemProps {
  data: ProductCSR;
}

export const ProductCSRListItem = ({ data }: ProductCSRListItemProps) => {
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
        <h2 className="pt-4 text-3xl font-bold">{data.title}</h2>
      </div>
    </>
  );
};
