import React, { useState } from 'react'
import './Productos.css'
import ReactCardFlip from 'react-card-flip';

export const ProductosCard = ({
  id,
  nombre,
  descripcion,
  reverso
}) => {

  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard(){
    setIsFlipped(!isFlipped);
  }

  // const [isRotated, setIsRotated] = useState(false);
  // const [isTransitioning, setIsTransitioning] = useState(false);

  // const handleClick = () => {
  //   setIsTransitioning(true);
  //   setIsRotated(!isRotated);
  // };

  // const handleTransitionEnd = () => {
  //   setIsTransitioning(false);
  // };

  const productoImageUrl = `/productos/${ id }.jpg`;
  // const productoImageUrl = 'assets/cremas.jpg';

  // '../../assets/cremas.jpg';

  return (
    <div>
      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
        <div className='card' onClick={flipCard}>
          <div className="col-12">
            <img src={ productoImageUrl } className="card-img"/>
          </div>

          <div className="col-12">
            <h5 className="title">{ nombre }</h5>
            <p className="card-text">{ descripcion }</p>
          </div>
        </div>
        <div className='card card-back' onClick={flipCard}>
          <h5 className='reverso'>{reverso}</h5>
        </div>
      </ReactCardFlip>
    </div>
  )
}
