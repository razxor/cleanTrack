"use client"  
import "../globals.css";
import React, {Suspense} from 'react'
import Product from './components/partial/products';
import Spinner from './components/partial/spinner';

export default function page() {
  return (
    <>
    <h1>Product Page</h1>
      <Suspense fallback={<Spinner />}>
        <Product />
      </Suspense>      
    </>    
  )
}
