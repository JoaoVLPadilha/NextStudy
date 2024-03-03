'use client'
import React, { useEffect } from "react";

type Produto = {
  nome: string;
};

const ClienteFetch = () => {
  const [data, setData] = React.useState<Produto[]>([]);

  useEffect(() => {
    const fetchClient = async () => {
      const produtosResponse = await fetch(
        "https://api.origamid.online/produtos"
      );
      const json: Produto[] = await produtosResponse.json();
      setData(json);
    };

    fetchClient()
  }, []);

  return (
    <>
      {data.map((produto) => (
        <div>{produto.nome}</div>
      ))}
    </>
  );
};

export default ClienteFetch;
