'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { FiTrash2 } from 'react-icons/fi'

export default function CartPage() {
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [checkoutLoading, setCheckoutLoading] = useState(false)

  useEffect(() => {
    if (status !== 'authenticated') return

    async function fetchCart() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(
          `/api/cart?userEmail=${encodeURIComponent(userEmail)}`
        )
        if (!res.ok) {
          const body = await res.json()
          throw new Error(body.message || 'Failed to fetch cart items')
        }
        const data = await res.json()
        setItems(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCart()
  }, [status, userEmail])

  const handleDelete = async (cartItemId) => {
    if (!userEmail) return
    try {
      const res = await fetch('/api/cart', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItemId, userEmail }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Remove failed')
      setItems((prev) => prev.filter((i) => i._id !== cartItemId))
    } catch (err) {
      alert(`Error: ${err.message}`)
    }
  }

  const handleCheckout = async () => {
    if (!userEmail || items.length === 0) return
    setCheckoutLoading(true)
    try {
      await Promise.all(
        items.map((item) =>
          fetch('/api/cart', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cartItemId: item._id, userEmail }),
          })
        )
      )
      setItems([])
      alert('Checked out successfully!')
    } catch {
      alert('Checkout failed. Please try again.')
    } finally {
      setCheckoutLoading(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading your cart…</p>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500">Please sign in to view your cart.</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  // Calculate totals
  const subtotal = items.reduce(
    (sum, item) => sum + item.productPrice * item.quantity,
    0
  )
  const shipping = subtotal > 0 ? 5.99 : 0
  const total = subtotal + shipping

  return (
    <main className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600">
      {/* Cart Items */}
      <section className="md:col-span-2 space-y-6">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        {items.length === 0 && (
          <p className="text-gray-600">Your cart is empty.</p>
        )}
        {items.map((item) => (
          <div
            key={item._id}
            className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-48 md:h-32 md:w-32 flex-shrink-0">
              <Image
                src={item.productImage}
                alt={item.productName}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 p-4 space-y-2 w-full">
              <h2 className="text-lg font-semibold">{item.productName}</h2>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <span>Price: ${item.productPrice.toFixed(2)}</span>
                <span>Qty: {item.quantity}</span>
              </div>
              <p className="text-sm text-gray-500">
                Added on {new Date(item.createdAt).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={() => handleDelete(item._id)}
              className="m-4 p-2 text-red-600 hover:text-white hover:bg-red-600 rounded-full transition-colors"
              aria-label="Remove item"
            >
              <FiTrash2 size={20} />
            </button>
          </div>
        ))}
      </section>

      {/* Checkout Summary */}
      <aside className="bg-white p-6 rounded-lg shadow-md md:sticky md:top-20">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="border-t pt-3 flex justify-between font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button
          onClick={handleCheckout}
          disabled={checkoutLoading || items.length === 0}
          className="w-full mt-6 bg-green-500 text-white py-3 rounded-full shadow hover:bg-green-700 "
        >
          {checkoutLoading ? 'Processing...' : 'Checkout'}
        </button>
      </aside>
    </main>
  )
}