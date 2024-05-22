import React from 'react'
import './Nosotros.css';
import Perfil from '../../../public/perfil/rosa.jpeg';

import {motion} from 'framer-motion'

export const Nosotros = () => {

  const transition = {type: 'spring', duration: 3}

  return (
    <div className="nosotros">
      <div className="left-n">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={Perfil} alt="" 
        />
      </div>
      <div className="right-n">
        <span>Nosotros</span>
        <span className='stroke-text-a'>DIANA LAURA VAZQUEZ SERRATO</span>
        <span>say about ussssssssssssssss</span>
        <motion.span 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          Hola
        </motion.span>
        <span>
          <span style={{color: 'var(--orange)'}}>
            Diana
          </span>{" "}
           - Laura
        </span>
      </div>
    </div>
  )
}
