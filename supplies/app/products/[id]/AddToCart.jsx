'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'

export default function AddToCart({
  productId,
  productName,
  productImage,
  productPrice,
}) {
  const { data: session } = useSession()
  const userEmail = session?.user?.email

  // Start empty so user can clear and type freely
  const [quantity, setQuantity] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleAdd = async () => {
    if (!userEmail) {
      setError('You must be signed in to add to cart.')
      return
    }

    // Default to 1 if user leaves it blank
    const qtyNum = quantity === '' ? 1 : parseInt(quantity, 10)
    if (isNaN(qtyNum) || qtyNum < 1) {
      setError('Please enter a valid quantity (1 or more).')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId,
          productName,
          productImage,
          productPrice,
          userEmail,
          quantity: qtyNum,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        setError(data.message || 'Failed to add to cart.')
      } else {
        alert('Product added to cart successfully!')
      }
    } catch {
      setError('Network error, please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <label htmlFor="qty" className="font-medium">
          Quantity:
        </label>
        <input
          id="qty"
          type="text"
          inputMode="numeric"
          pattern="\d*"
          placeholder="1"
          value={quantity}
          onChange={(e) => {
            const val = e.target.value
            // allow only digits or empty
            if (/^\d*$/.test(val)) {
              setQuantity(val)
            }
          }}
          className="w-20 border rounded px-2 py-1"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        onClick={handleAdd}
        disabled={loading}
        className="bg-green-500 text-white px-4 py-2 w-6/12  rounded-full  hover:bg-green-600 disabled:opacity-50"
      >
        {loading ? 'Adding…' : 'Add to Cart'}
      </button>
    </div>
  )
}