import { useRouter } from "next/router";

const ProductReview = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <h1>
      {reviewId} review for product {productId}
    </h1>
  );
}

export default ProductReview;