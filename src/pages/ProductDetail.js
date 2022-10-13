import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  const product = params.productName;

  return (
    <>
      <h1>This is a page for {product}</h1>
      <h3>This page shows detailed information of the {product}</h3>
    </>
  );
}
