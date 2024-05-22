import React, { useState } from 'react'
import './Header.css';
import { Link } from "react-scroll";

export const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className='header'>
      
      <ul className='header-menu'>
        <li>
          <Link
            onClick={()=>setMenuOpened(false)}
            to='text-2'
            spy={true}
            smooth={true}
          >Productos</Link></li>
        <li>
          <Link
            onClick={()=>setMenuOpened(false)}
            to='nosotros'
            spy={true}
            smooth={true}
          >Nosotros</Link></li>
        <li>
          <Link
            onClick={()=>setMenuOpened(false)}
            to='encontrarnos'
            spy={true}
            smooth={true}
          >Dónde encontrarnos</Link></li>
        <li className='quimica'>Diana Laura</li>
        <li>Promociones</li>
        <li>Testimonios</li>
        <li>Regalos</li>
      </ul>
    </div>
  )
}
