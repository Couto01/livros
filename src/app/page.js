"use cliet"

import { serverLogout } from "@/actions/auth";
import CardLivro from "@/components/CardLivro";
import Titulo from "@/components/Titulo";
import { useRouter } from "next/navigation"

async function carregarDados() {
  const url = "https://openlibrary.org/subjects/fantasy.json";
  const response = await fetch(url);
  const json = await response.json();
  return json.works;
}

export async function push(){
  const{push} = useRouter()
}

function logout(){
  serverLogout()
  push("/login")
}

export default async function Home() {
  const livros = await carregarDados();

  return (
    <>
      <nav className="justify-center flex items-end gap-4 bg-green-700 p-4">
        <h1 className="text-3xl font-bold">Booker</h1>

        <a href="/favoritos">favoritos</a>
      </nav>

      <Titulo>em alta</Titulo>

      <section className="flex flex-wrap gap-2">
        {livros.map((livro) => (
          <CardLivro livro={livro} />
        ))}
      </section>
    </>
  );
}
