import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // Hook 'useState.
    // Array para almacenar las categorias.
    const [categorias, setCategorias] = useState([]);


    // Funcion para agregar una nueva categoria
    const agregarCategoria = (nuevoValor) => {

        // Validar si el nuevo valor ya existe en la lista de categorias
        const yaExiste = categorias.find(categoria => categoria.toLowerCase() == nuevoValor.toLowerCase());
        if (yaExiste) {
            return;
        }

        setCategorias([
            ...categorias, // Se hace una copia de todas las categorias que existian
            nuevoValor // Se agrega la nueva categoria 
        ]);
    }

    return (
        <>

            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input o buscador */}
            <AddCategory
                nuevaCategoria={agregarCategoria}
            />

            {/* Listado de gifs o resultados de busqueda */}
            {
                categorias.map(categoria => (
                    <GifGrid
                        key={categoria}
                        categoria={categoria}
                    />
                ))
            }

        </>
    )
}
