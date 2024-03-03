import React from "react";

type Produto = {
  nome: string;
};

const ServerFetch = async () => {
  const produtosResponse = await fetch("https://api.origamid.online/produtos");
  const data: Produto[] = await produtosResponse.json();
  console.log(data);
  return (
    <>
      <div>serverFetch</div>
      {data.map((produto) => (
        <div>{produto.nome}</div>
      ))}
    </>
  );
};

export default ServerFetch;
