"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getSingleProduct } from "@/services/productService";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getSingleProduct(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.price} $</p>
    </div>
  );
}

