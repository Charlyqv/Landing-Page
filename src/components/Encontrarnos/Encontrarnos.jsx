import React from 'react'
import './Encontrarnos.css';
import Mapa from '../../../public/mapa.png';

export const Encontrarnos = () => {
  return (
    <div className='encontrarnos'>
      <div className="left-e">
        <span>Dónde encontrarnos</span>

        <span>Calle Obregon Col CENTRO</span>

        <span>Horarios</span>

        <span>Lunes a Viernes de 8am a 5pm</span>

        <a href={'https://maps.app.goo.gl/E9c2mGyVq29VeMHJA'}>https://maps.app.goo.gl/E9c2mGyVq29VeMHJA</a>
      </div>

      <div className="right-e">
        <div className='mapa'>
          <img src={Mapa} alt="" />
        </div>
      </div>
    </div>
  )
}
