import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs()', () => {

    const categoria = 'Valorant';

    test('Debe retornar un arreglo de gifs', async () => {
        const gifs = await getGifs( categoria ); // Se envia la categoria a la funcion 
        expect( gifs.length ).toBeGreaterThan( 0 ); // Se evalua que la longitud del array obtenido sea mayor a cero
        expect( gifs[0] ).toEqual({ // Se evalua que los elementos del array tengan la estructura siguiente:
            id: expect.any( String ), // Espera un cualquier valor, pero debe ser un String
            title: expect.any( String ), // Espera un cualquier valor, pero debe ser un String
            url: expect.any( String ) // Espera un cualquier valor, pero debe ser un String
        });
    });

});