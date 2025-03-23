import { notFound } from "next/navigation";

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Error loading review");
  // }

  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
    console.log("Not found!!!!");
  }
  return (
    <h1>
      Reviewss {reviewId} for product {productId}
    </h1>
  );
}
