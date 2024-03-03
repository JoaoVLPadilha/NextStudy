import { fetchCursos } from "@/api/cursos";
import Link from "next/link";
import React from "react";
export type Curso = {
    id: number,
    slug: string,
    nome: string
}

const PageCursos = async () => {
  const data = await fetchCursos<Curso[]>([""]);
//   console.log(data);
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {data.map((cursos) => <Link key={cursos.nome} href={`cursos/${cursos.slug}`}>{cursos.nome}</Link>)}
    </div>
  );
};

export default PageCursos;
