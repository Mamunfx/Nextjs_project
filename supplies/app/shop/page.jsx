'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaAngleDown } from 'react-icons/fa'
import FloatingItem from '../components/FloatingItem'
import ProductCard from '../components/ProductCard'

export default function ShopPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      setError(null)
      try {
        const res = await fetch('/api/products')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setProducts(
          data.map((p) => ({
            ...p,
            price:
              typeof p.price === 'number'
                ? p.price
                : parseFloat(p.price) || 0,
          }))
        )
      } catch (err) {
        console.error(err)
        setError(err.message || 'Failed to load products')
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) return <p className="text-center py-8">Loading products…</p>
  if (error) return <p className="text-center py-8 text-red-500">Error: {error}</p>
  if (!products.length) return <p className="text-center py-8">No products found.</p>

  return (
    <div className="my-6 w-11/12 mx-auto space-y-8">
      <h1 className="text-4xl text-gray-600 font-semibold text-center my-10">
        Shop all products
      </h1>

      <div className="flex justify-between items-center gap-2">
        <button className="btn rounded-xl text-gray-600">
          Default sorting <FaAngleDown />
        </button>
        <div className="text-gray-600 flex items-center gap-3 text-sm">
          <span>Showing {products.length} products</span>
          <label className="flex items-center gap-1">
            <input type="checkbox" defaultChecked className="checkbox" />
            Only products on sale
          </label>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <FloatingItem
          imgUrl="https://enovathemes.com/propharm/wp-content/uploads/bn_img_12.png"
          bgUrl="https://enovathemes.com/propharm/wp-content/uploads/slide6_back.jpg"
        />
        <FloatingItem
          imgUrl="https://enovathemes.com/propharm/wp-content/uploads/bn_img_2.png"
          bgUrl="https://enovathemes.com/propharm/wp-content/uploads/slide5_back.jpg"
        />
      </div>

      <div className="grid lg:grid-cols-4 gap-4 mt-6">
        {products.map((product) => {
          const id = product._id ?? product.id
          return (
            <Link key={id} href={`/products/${id}`} className="block">
              <ProductCard {...product} onAddToCart={() => console.log('Add', id)} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}