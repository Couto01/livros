"use client";

import CardLivro from "@/components/CardLivro";
import Titulo from "@/components/Titulo";
import { useState } from "react";
import { useNavigation } from "next/navigation";

// function carregarLivros() {
//   if (typeof window !== 'undefined') {
//     const livros = JSON.parse(localStorage.getItem('favoritos'));
//     console.log(livros);
//     return Favoritos || [];
//   }
// }

export default function Favoritos() {
	const livros = JSON.parse(localStorage.getItem("favoritos")) || [];
	console.log(livros);

	return (
		<>
			<nav className="flex items-end gap-4 bg-green-700 p-4">
				<h1 className="text-3xl font-bold">Booker</h1>
				<a href="/favoritos">favoritos</a>
			</nav>

			<Titulo>Favoritos</Titulo>

			<section className="flex flex-wrap gap-2">
				{livros.length > 0 &&
					livros.map((livro) => <CardLivro livro={livro} />)}
			</section>
		</>
	);
}
