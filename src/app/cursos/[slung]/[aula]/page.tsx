import { fetchCursos } from "@/api/cursos";
import Link from "next/link";
import React from "react";

type AulasPageType = {
  params: { slung: string, aula: string };
  
};

type Aula = {
  slug: string;
  nome: string;
  descricao: string
  tempo: number
};

const AulasPage = async ({ params }: AulasPageType) => {
    const data: Aula = await fetchCursos([params.slung, params.aula]);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>{data.nome}</h1>
      <h2>{data.descricao}</h2>
    </div>
  );
};

export default AulasPage;
