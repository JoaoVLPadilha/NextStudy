import { Slung } from "@/app/cursos/[slung]/page"
import { Curso } from "@/app/cursos/page"

export const fetchCursos = async <T>(cursoParams: string[]): Promise<T> => {

    const allParams = cursoParams.join('/')
    const response = await fetch(`https://api.origamid.online/cursos/${allParams}`)
    const data = await response.json()

    return data

} 