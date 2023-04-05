import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas de <GifItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    
    test('Debe hacer match con el snapshot', () => {
        // El componente debe de recibir las propidades de "title" y "url"
        const { container } = render( <GifItem title={title} url={url} /> ); // Renderizar el componente
        expect( container ).toMatchSnapshot(); // Debe hacer match
    });

    test('Debe de mostrar la imagen con el url y el alt indicado', () => {
        render( <GifItem title={title} url={url} /> ); // Renderizar el componente
        const { src, alt } = screen.getByRole('img'); // Se obtiene el 'url' y 'alt' del elemento 'img' del componente
        expect( src ).toBe( url ); // Comparando las 'url'
        expect( alt ).toBe( title ); // Comparando ls 'alt'
    });

    test('Debe de mostrar el titulo en el componente', () => {
        render( <GifItem title={title} url={url} /> ); // Renderizar el componente
        expect( screen.getByText( title ) ).toBeTruthy(); // Se evalua si el 'title' esta como un texto en el componente
    });
    
});