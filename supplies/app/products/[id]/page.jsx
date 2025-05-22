import dbConnect from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

export default async function ProductPage({ params }) {
  let product
  try {
    const col = dbConnect('productCollection')
    product = await col.findOne({ _id: new ObjectId(params.id) })
  } catch {
    notFound()
  }
  if (!product) notFound()

  const {
    title,
    imageSrc,
    imageAlt,
    badges = [],
    description,
    rating = 0,
    reviewsCount = 0,
    price,
  } = product

  const filledStars = Math.floor(rating)
  const hasHalfStar = rating - filledStars >= 0.5

  return (
    <main className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="text-sm font-medium bg-sky-100 text-sky-400 px-2 py-1 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              {title}
            </h1>

            {/* Rating & Reviews */}
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, idx) => {
                  if (idx < filledStars) {
                    return <FaStar key={idx} className="h-5 w-5 text-yellow-500" />
                  } else if (idx === filledStars && hasHalfStar) {
                    return <FaStarHalfAlt key={idx} className="h-5 w-5 text-yellow-500" />
                  }
                  return <FaRegStar key={idx} className="h-5 w-5 text-gray-300" />
                })}
              </div>
              <span className="ml-2 text-gray-600">
                {reviewsCount} review{reviewsCount !== 1 && 's'}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
              {description}
            </p>
          </div>

          {/* Price & Actions */}
          <div className="mt-4">
            <div className="text-3xl font-bold text-gray-900 mb-4">
              ${price.toFixed(2)}
            </div>
            <div className="flex gap-4">
              <button className="flex-1 bg-green-400 text-white px-4 py-3 rounded-full font-semibold shadow hover:bg-green-600 transition ">
                Add to Cart
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  const col = dbConnect('productCollection')
  const ids = await col.find({}, { projection: { _id: 1 } }).toArray()
  return ids.map((doc) => ({ id: doc._id.toString() }))
}