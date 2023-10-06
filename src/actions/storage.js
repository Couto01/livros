"use client";
import { useEffect, useState } from "react";

export default function getFavoritos() {
	const [livros, setLivros] = useState([]);
	useEffect(() => {
		let livros = JSON.parse(localStorage.getItem("favoritos")) || [];
		setLivros(livros);
	}, []);
	return livros;
}
