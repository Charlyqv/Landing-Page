import React from 'react'
import { ProductosCard } from './ProductosCard'
import { productos } from '../../data/productos'

export const ProductosList = () => {
  return (
    <div className="row rows-cols-1 row-cols-md-4 g-3">
      {
        productos.map( producto => (
        <ProductosCard 
          key={ producto.id }
          {...producto} />
        ))
      }
    </div>
  )
}
