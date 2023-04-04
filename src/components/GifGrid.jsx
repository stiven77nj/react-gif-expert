import React from 'react';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ categoria }) => {

    // Se llama al custom hook para obtener la data y dibujarla en pantalla
    const { data, isLoading } = useFetchGifs( categoria ); 

    return (
        <>
            {/* Titulo de la categoria */}
            <h3>{categoria}</h3>
            <div className='card-grid' style={{ background: '#ccc'}}>
                {
                    !isLoading /* Si isLoading es false */
                    
                    ?

                    data.map(d => (
                        <GifItem
                            key={d.id}
                            {...d} /* Enviamos todas las propiedades con ayuda del operador ... */
                        />
                    ))

                    :

                    <h3>Cargando...</h3> /* Si isLoading es true */
                }
            </div>
        </>
    )
}

// Cada vez que react detecta un cambio vuelve a redibujar el componente.
// Hay acciones que se le pueden indicar a react para evitar este comportamiento.
// useEffect sirve para disparar efectos secundarios cuando algo ocurra