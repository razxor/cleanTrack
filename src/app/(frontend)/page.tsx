// "use client"  
import "../globals.css";
import React, {Suspense} from 'react'
import Product from './components/partial/products';
import Spinner from './components/partial/spinner';

export default function page() {
  return (
    <>    
    <div className="max-w-3/5 mx-auto">
    <h1 className="text-3xl text-center py-3 font-bold text-white">Infinite Scroll | by using Intersection Observer</h1>
      <Suspense fallback={<Spinner />}>
        <Product />
      </Suspense>          
    </div> 
    </>   
  )
}
