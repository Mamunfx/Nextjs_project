'use client'
import React, { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import FloatingItem from '../components/FloatingItem';
import ProductCard from '../components/ProductCard';

const page = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchProducts() {
          setLoading(true)
          setError(null)
          try {
            const res = await fetch('/api/products')
            if (!res.ok) throw new Error(`HTTP ${res.status}`)
            const data = await res.json()
            const cleaned = data.map((p) => ({
              ...p,
              price:
                typeof p.price === 'number'
                  ? p.price
                  : parseFloat(p.price) || 0,
            }))
            setProducts(cleaned)
          } catch (err) {
            console.error('Failed to fetch products:', err)
            setError(err.message || 'Failed to load products')
          } finally {
            setLoading(false)
          }
        }
        fetchProducts()
      }, [])

      if (loading) {
        return <p className="text-center py-8">Loading products…</p>
      }
      if (error) {
        return <p className="text-center py-8 text-red-500">Error: {error}</p>
      }
      if (!products.length) {
        return <p className="text-center py-8">No products found.</p>
      }

    return (
        <div className=' my-6 w-11/12 mx-auto space-y-8'>
            <div>
                <h1 className='text-4xl text-gray-600 font-semibold text-center my-10'>Shop all products</h1>
            </div>
            <div className='flex justify-between items-center'>
            <div tabIndex={0} role="button" className='btn  rounded-xl text-gray-600'>Default sorting <FaAngleDown /></div>
            <div className='text-gray-600 flex items-center gap-3 text-sm'>
                <h1 >Showing 1-28 of 64 </h1>
                <h1 ><input type="checkbox" defaultChecked className="checkbox" /> Only product on sale </h1>
            </div>
            </div>
            <div className='flex justify-center gap-4 '>
                <FloatingItem imgUrl={'https://enovathemes.com/propharm/wp-content/uploads/bn_img_12.png'} bgUrl={'https://enovathemes.com/propharm/wp-content/uploads/slide6_back.jpg'}
                 ></FloatingItem>
                <FloatingItem imgUrl={'https://enovathemes.com/propharm/wp-content/uploads/bn_img_2.png'} bgUrl={'https://enovathemes.com/propharm/wp-content/uploads/slide5_back.jpg'}></FloatingItem>
            </div>

            <div className='grid grid-cols-4 gap-4 mt-6'>
            {products.map((product) => (
            <ProductCard key={product._id || product.id}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              badges={product.badges}
              title={product.title}
              rating={product.rating}
              reviewsCount={product.reviewsCount}
              price={product.price}
              onAddToCart={() => handleAdd(product._id || product.id)}
            />
          
        ))}
            </div>
        </div>
    );
};

export default page;