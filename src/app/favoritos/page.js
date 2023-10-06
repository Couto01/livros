import CardLivro from "@/components/CardLivro";
import Titulo from "@/components/Titulo";

async function carregarLivros(favoritos) {
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${favoritos}`
  );
  const json = await response.json();
  console.log(json);
  return json.docs;
}

export default async function Favoritos() {
  const livros = await carregarLivros();
  console.log(livros);

  return (
    <>
    
      <nav className="flex items-end gap-4 bg-green-700 p-4">
        <h1 className="text-3xl font-bold" >Booker</h1>
        <a href="/favoritos">favoritos</a>
      </nav>

      <Titulo>Favoritos</Titulo>

      <section className="flex flex-wrap gap-2">
        {livros.map((favoritos) => (
          <CardLivro livro={favoritos} />
        ))}
      </section>
    </>
  );
}
