
// Funcion para hacer las consultas a la api 
export const getGifs = async ( categoria ) => {
    // key utilizada para consumir la api
    const api_key = 'Js2M2T0YpKbkoanvegqa0FIbNKz7fToF';
    // Url de la api
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ categoria }&limit=3`;
    // Se obtiene la respuesta de la peticion
    const resp = await fetch( url );
    // De la respuesta se obtiene la data
    const { data } = await resp.json();
    // Se obtinen los datos que se requieren
    const gifs = data.map( img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ));
    console.log( gifs );
    // Se retornan los gifs
    return gifs;
}