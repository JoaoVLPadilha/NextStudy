import { fetchCursos } from "@/api/cursos";
import Link from "next/link";
import React from "react";
type SlungPageType = {
  params: { slung: string };
};

export type Slung = {
  slug: string;
  nome: string;
  aulas: {
    slug: string,
    nome: string
  }[]
};
const SlungPage = async ({ params }: SlungPageType) => {
  const data = await fetchCursos<Slung>([params.slung]);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data.aulas.map((aulas) => (
        <Link key={aulas.nome} href={`${params.slung}/${aulas.slug}`}>
          {aulas.nome}
        </Link>
      ))}
    </div>
  );
};

export default SlungPage;
