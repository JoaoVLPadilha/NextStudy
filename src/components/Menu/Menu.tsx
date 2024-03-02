import Link from 'next/link'
import React from 'react'
import Acesso from '../Acesso/acesso'
const Menu = () => {
  return (
    <ul className='menu'>
      <li><Link href={'/'}>Home</Link></li>
      <li><Link href={'/sobre'}>Sobre</Link></li>
      <li><Link href={'/contato'}>Contato</Link></li>
      {/* <Acesso/> */}
    </ul>
  )
}

export default Menu