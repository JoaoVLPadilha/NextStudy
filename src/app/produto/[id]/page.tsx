import React from 'react'

type params = {
    params: {
        id: string
    }
}

type produto = {
    id: string,
    nome: string,
    preco: number
}

const ProdutoPage = async ({params}: params) => {
    const response = await fetch(`https://api.origamid.online/produtos/${params.id}`)
    const data: produto = await response.json()
  return (
    <>
    <h2>{data.id}</h2>
    <h2>{data.nome}</h2>
    <h2>{data.preco}</h2>
    </>
  )
}

export default ProdutoPage