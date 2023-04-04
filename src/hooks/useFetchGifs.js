import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";

// Custom Hook que nos retorna la data y el mensaje de carga
export const useFetchGifs = ( categoria ) => {

    // Hook useState.
    // Almacenar los datos que devuelve la peticion http.
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Funcion para realizar la peticion http y obetener los datos.
    const getData = async (c) => {
        const data = await getGifs(c);
        setData(data);
        setIsLoading( false );
    }

    // Hook useEffect.
    // Sirve para que la peticion http solo se haga una vez, que es cuando el componente
    // termina de dibujar.
    useEffect(() => {
        getData(categoria); // Se llama la funcion encargada de hacer la peticion http
    }, []); // Dependencias que hacen que el hook se dispare
    // Si el arreglo de dependencias se deja vacio, se ejecuta solamente la primera que 
    // se crea y se contruye el componente

    return {
        data,
        isLoading
    }
}