import React from 'react'
import { Header } from '../Header/Header'
import './Page.css';
import Cremas from '../../assets/cremas.jpg';
import { CarouselFade } from '../Carousel/CarouselFade';
import { ProductosList } from '../Productos/ProductosList';


export const Page = () => {
  return (
    <>
      <div className='page'>
        <Header />  
      </div>

      <div className="text">
        <span>COMENCEMOS CON EL BIEN</span>
      </div>

      <div className="text-1">
        <span>Construido con productos naturales. Entregado en tu puerta. Listo en minutos.</span>
      </div>

      <CarouselFade/>      

      <div className="text-2">
        <span>¡Nuestra belleza? Inigualable.</span>
      </div>

      <div className="text-3">
        <span>Nuestros expertos en cuidado de la piel seleccionan ingredientes naturales y los transforman en productos rejuvenecedores. Después, te ofrecemos todo ese resplandor. Estamos aquí para ti. 24/7.</span>
      </div>

      <div className='cards'>
        <ProductosList />
      </div>
    </>
  )
}
