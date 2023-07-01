import { useRouter } from "next/router";

const ProductDetail = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <span>Loading ...</span>;
  }
  return (
    <>
      <h3>
        {product.id} {product.title}
      </h3>
      <span>price : {product.price}$</span>
      <p>{product.description}</p>
      <hr /> 
    </>
  );
};
export default ProductDetail;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  
  const response = await fetch(
    `http:://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();
  return {
    props: {
      product: data,
    },
  };
}
