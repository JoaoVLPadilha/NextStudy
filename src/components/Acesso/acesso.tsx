import React from 'react'
import fs from 'fs/promises'

const Acesso = async () => {
    await fs.appendFile('acesso.txt', `${Date.now()}` ,'utf-8')
    const dataRead = fs.readFile('acesso.txt', 'utf-8')
  return (
    <div>{dataRead}</div>
  )
}

export default Acesso