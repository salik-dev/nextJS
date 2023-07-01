import { useRouter } from "next/router";

const ProductList = ({ products }) => {
  return products.map((product) => {
    return (
      <>
        <div key={product.id}>
          <h3>
            {product.id} {product.title}
          </h3>
          <span>price : {product.price}$</span>
          <p>{product.description}</p>
        </div>
        <hr />
      </>
    );
  });
};
export default ProductList;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}
