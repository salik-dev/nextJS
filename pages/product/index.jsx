import { useRouter } from "next/router";
import Link from "next/link";

const ProductList = ({ productId = 100 }) => {
  const router = useRouter();
  return (
    <>
      <ul>
        <li>
          <h3>
            <Link href="/product/1">Product 1</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/product/2">Product 2 </Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/product/3">Product 3</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href={`/product/${productId}`}>Product {productId}</Link>
          </h3>
        </li>
      </ul>
      <button onClick={() => router.push("/")}>Home</button>
    </>
  );
};
export default ProductList;
