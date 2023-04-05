import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


 // Se hace un mock completo de ese path
jest.mock("../../src/hooks/useFetchGifs");


describe('Pruebas de <GifGrid />', () => {

    const categoria = 'valorant';
    
    test('Debe de mostrar el "loading" inicialmente', () => {

        useFetchGifs.mockReturnValue({ // Se simula el comportamiento inicial del custom hook
            images: [],
            isLoading: true
        });

        render( <GifGrid categoria={ categoria } /> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(categoria) );
        // screen.debug();
    });

    test('Debe de mostrar el "items" cuando se cargan las imagenes', () => {
        const data = [
            {
                id: 'abc',
                title: 'valorant',
                url: 'https://localhost/valorant.jpg'
            },
            {
                id: '123',
                title: 'goku',
                url: 'https://localhost/goku.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({ // Se simula el comportamiento del custom hook cuando obtiene imagenes
            data: data,
            isLoading: false
        });

        render( <GifGrid categoria={ categoria } /> );
        expect( screen.getAllByRole('img').length ).toBe( 2 ); // Se evalua que las imagenes sean 2
    });
    
});