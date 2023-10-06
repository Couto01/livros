"use client"
import { useEffect, useState } from "react"
import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'

export default function CardLivro({livro}){
    const [ favorito, setFavorito ] = useState(false) 
    
    const image_url = `https://covers.openlibrary.org/b/id/${livro.cover_id}-M.jpg`;


    useEffect(() => {
        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        const favorito = favoritos.find(f => f.key === livro.key)
        setFavorito(favorito)
    }, [])

    function favoritar(){
        setFavorito(true)

        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        favoritos.push(livro)
        localStorage.setItem("favoritos", JSON.stringify(favoritos))
    }
    
    function desfavoritar(){
        setFavorito(false) 

        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        const favoritosAtualizado = favoritos.filter(f => f.key !== livro.key )
        localStorage.setItem("favoritos", JSON.stringify(favoritosAtualizado))
    }

    return (
        <div className="flex flex-col items-center justify-between gap-1 w-40 m-2 relative">
            { favorito ? 
                <HeartIcon 
                    className="h-6 w-6 text-red-600 absolute top-1 right-2 cursor-pointer"
                    onClick={desfavoritar}
                 />
                :
                <HeartIconOutline 
                    className="h-6 w-6 absolute top-1 right-2 cursor-pointer hover:text-red-600" 
                    onClick={favoritar}
                />
            }

            <img className="rounded h-56" src={image_url} alt="capa do livro" />
            <span className="font-bold text-lg w-full line-clamp-1 text-center">
                {livro.title}
            </span>
        </div>
    )
}
