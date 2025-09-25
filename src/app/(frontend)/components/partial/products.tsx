// app/product/components/partial/Product.tsx
"use client";

import React, { useEffect, useState } from "react";
import Spinner from "./spinner";

type ProductType = {
  id: number;
  title: string;
  body: string;
}

export default function Product() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Demo API
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5000")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 border rounded-lg shadow-sm bg-white"
        >
          <h2 className="font-semibold text-lg">{product.title}</h2>
          <p className="text-red-600">{product.body}</p>
        </div>
      ))}
    </div>
  );
}
