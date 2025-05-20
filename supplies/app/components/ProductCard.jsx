import Image from 'next/image'

export default function ProductCard({
  imageSrc,
  imageAlt = 'Product image',
  badges = [],
  title,
  rating = 0,
  reviewsCount = 0,
  price,
  onAddToCart,
  onSale =false,
}) {
  // build an array of 5 star icons
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <svg
      key={i}
      className={`w-5 h-5 flex-shrink-0 ${
        i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 15l-5.878 3.09L5.91 11.545.841 7.09l6.068-.883L10 1l2.091 5.207 6.068.883-4.999 4.455 1.788 6.545z" />
    </svg>
  ))

  return (
    <div className="w-full max-w-xs sm:max-w-sm  rounded-lg  overflow-hidden mx-auto ">
      <div className="relative w-full h-48 sm:h-56 rounded-xl bg-gray-50">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4 flex flex-col space-y-3">
        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, idx) => (
            <span
              key={idx}
              className="text-xs font-semibold bg-sky-100 text-sky-400 px-2 py-0.5 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-gray-600 font-semibold text-lg truncate">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center">
          <div className="flex">{stars}</div>
          {reviewsCount > 0 && (
            <span className="ml-2 text-gray-600 text-sm">
              ({reviewsCount})
            </span>
          )}
        </div>

        {/* Price */}
        <p className="text-xl font-bold text-gray-600">${price}</p>

        {/* Add to Cart */}
        <button
          onClick={onAddToCart}
          className="w-full bg-gray-200  py-2 rounded-full hover:bg-green-400 transition-colors duration-200 text-gray-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}