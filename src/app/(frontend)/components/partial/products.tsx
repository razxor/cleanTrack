// app/product/components/partial/Product.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import Spinner from "./spinner";

type ProductType = {
  id: number;
  title: string;
  body: string;
}

export default function Product() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [hasMore, setHasMore] = useState(true);


  const fetchProducts = async (pageNUmber: number) => {
    setLoading(true);
    // Demo API
    await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${pageNUmber}`)
      .then((res) => res.json())
      .then((data) => {        
        if (data.length === 0) {
          setHasMore(false);
        } else {
          setProducts((prev) => [...prev, ...data]);        
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }

  useEffect(() => {
    fetchProducts(pageNumber);
  }, [pageNumber]);

  

  // Setup Intersection Observer for Infinite Scrolling
  useEffect(() => {
 if (!loaderRef.current || !hasMore) return;
    const options = {
      threshold : 1
    }
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        if (entries[0].isIntersecting && !loading && hasMore) {
          console.log('Loading more products...');          
        setPageNumber((prev) => prev + 1); // load next page
      }
      },
      options
    );
      observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loaderRef, loading])



  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 border rounded-lg shadow-sm bg-white"
        >
          <h2 className="font-semibold text-lg">{product.id} - {product.title}</h2>
          <p className="text-red-600">{product.body}</p>
        </div>
      ))}
      {loading && <Spinner />}
      {!hasMore && <p className="mt-4 text-center">No more product</p>}
       {/* Loader target */}
      <div ref={loaderRef} ></div>
    </div>
  );
}
