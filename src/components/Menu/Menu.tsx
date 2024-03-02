import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <ul className='menu'>
      <li><Link href={'/'}>Home</Link></li>
      <li><Link href={'/sobre'}>Sobre</Link></li>
      <li><Link href={'/contato'}>Contato</Link></li>
    </ul>
  )
}

export default Menu