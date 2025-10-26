import React from 'react'
import ProductCardGrid from '../components/Products'

export default function HomeProducts() {
  return (
    <div className="HomeProducts" id="HomeProducts">
      <ProductCardGrid />
      <ProductCardGrid/>
    </div>
  )
}
