import { Badge } from '@/components/Ui/badge'
import type { Product } from '@/store/types'
import { getBadgeColor, isWishlisted } from '@/utils/utils'

type Props = {
    handleProductClick: (product: Product) => void
    handleWishlist: (product: Product) => void
    product: Product
    wishlist: Product[]
    
}

const ProductCardTypeTwo = ({ handleProductClick, product, handleWishlist, wishlist }: Props) => {
  return (
      <div
          className="relative max-w-11/12 gap-4 bg-white rounded-2xl overflow-hidden shadow-lg hover:cursor-pointer hover:scale-105 duration-200 hover:shadow-xl border border-slate-300 mt-6"
          onClick={() => handleProductClick(product)}
      >
          {/* Heart Icon */}
          <div className="absolute top-4 right-4 z-10">
              <div className="w-10 h-10 bg-black/30  bg-opacity-20 hover:scale-105 rounded-full flex items-center justify-center backdrop-blur-sm duration-200" onClick={(e) => {
                  e.stopPropagation();
                  handleWishlist(product);
              }}>
                  <svg className={`w-5 h-5 ${isWishlisted(product.id, wishlist) ? "text-red-600" : "text-white"}`} fill={`${isWishlisted(product.id, wishlist) ? "red" : "none"}`} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 000-6.364 4.5 4.5 0 00-6.364 0L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
              </div>
          </div>

          {/* Product Image */}
          <div className="h-64 bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center p-8 m-1 rounded-lg">
              <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-contain"
              />
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
              <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
          </div>

          {/* Product Info */}
          <div className="px-6 py-4 bg-white">
              <div className="flex justify-between items-start">
                  <div>
                      <h3 className="h-5 overflow-hidden text-lg font-medium text-gray-900 mb-1">
                          {product.title}
                      </h3>
                      <p className="text-2xl font-bold text-orange-500">
                          ${product.price}
                      </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                  </div>
              </div>

              {/* Badge */}
              <div className="mt-3">
                  <Badge className={getBadgeColor(product.availabilityStatus)}>
                      {product.availabilityStatus}
                  </Badge>
              </div>
          </div>
      </div>
  )
}

export default ProductCardTypeTwo