import { ObjectId } from "mongodb"
import dbConnect from "@/lib/dbConnect"
import { notFound } from "next/navigation"
import Image from "next/image"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import AddToCart from "@/app/products/[id]/AddToCart"

export default async function ProductPage({ params }) {
  let product
  try {
    const col = dbConnect("productCollection")
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
        <div className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {badges.map((b) => (
                <span
                  key={b}
                  className="text-sm bg-sky-100 text-sky-600 px-2 py-1 rounded-full"
                >
                  {b}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => {
                if (i < filledStars) return <FaStar key={i} className="text-yellow-500" />
                if (i === filledStars && hasHalfStar) return <FaStarHalfAlt key={i} className="text-yellow-500" />
                return <FaRegStar key={i} className="text-gray-300" />
              })}
              <span className="ml-2 text-gray-600">
                {reviewsCount} review{reviewsCount !== 1 && "s"}
              </span>
            </div>
            <p className="mb-6 text-gray-700 whitespace-pre-line">{description}</p>
          </div>

          <div>
            <div className="text-3xl font-extrabold mb-4">
              ${price.toFixed(2)}
            </div>
            <AddToCart
              productId={params.id}
              productName={title}
              productImage={imageSrc}
              productPrice={price}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  const col = dbConnect("productCollection")
  const ids = await col.find({}, { projection: { _id: 1 } }).toArray()
  return ids.map((doc) => ({ id: doc._id.toString() }))
}