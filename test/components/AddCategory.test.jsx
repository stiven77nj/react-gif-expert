import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Pruebas en el componente <AddCategory />', () => {

    test('Debe cambiar el valor de la caja de texto', () => {
        // El componente debe recibir una 'funcion' como 'prop'
        render( <AddCategory nuevaCategoria={ () => {} } /> ); // Se renderiza el componente
        const input = screen.getByRole('textbox'); // Se obtiene el elemento 'input'
        // Se dispara el evento
        fireEvent.input( input, { target: { value: 'Saitama' } } ); // Establecemos el valor del input como 'saitama'
        expect( input.value ).toBe( 'Saitama' );  // Se hace la comparacion
    });

    test('Debe de llamar la funcion de "nuevaCategoria" si el input no tiene un valor vacio', () => {
        const nuevaCategoria = jest.fn(); // Jes.fn es un mock y simula una funcion
        // El componente debe recibir una 'funcion' como 'prop'
        render( <AddCategory nuevaCategoria={ nuevaCategoria } /> ); // Se renderiza el componente
        const input = screen.getByRole('textbox'); // Se obtiene el elemento 'input'
        const form = screen.getByRole('form'); // Se obtiene el 'formulario'
        // Se dispara el evento "Se establece el valor en la caja de texto"
        fireEvent.input( input, { target: { value: 'valorant' } } ); // Se establece el valor del input
        // Se dispara el evento "submit del formulario"
        fireEvent.submit( form );
        expect( input.value ).toBe(''); // Despues de hacer el submit, el valor del input queda como vacio.
        
        expect( nuevaCategoria ).toHaveBeenCalled(); // Se evalua si la funcion ha sido llamada
        expect( nuevaCategoria ).toHaveBeenCalledTimes(1); // Se evalua si la funcion ha sido llamada una vez
        expect( nuevaCategoria ).toHaveBeenCalledWith( 'valorant' ); // Se evalua si la funcion ha sido llamada con el valor del 'input'
        
        // screen.debug();
    });

    test('No se debe de llamar la funcion de "nuevaCategoria" si el input esta vacio', () => {
        const nuevaCategoria = jest.fn(); // Jes.fn es un mock y simula una funcion
        // El componente debe recibir una 'funcion' como 'prop'
        render( <AddCategory nuevaCategoria={ nuevaCategoria } /> ); // Se renderiza el componente
        const form = screen.getByRole('form'); // Se obtiene el 'formulario'
        // Se dispara el evento "submit del formulario"
        fireEvent.submit( form );
        expect( nuevaCategoria ).toHaveBeenCalledTimes(0); // Se evalua si la funcion ha sido llamada cero veces
        expect( nuevaCategoria ).not.toHaveBeenCalled(); // Se evalua si la funcion no ha sido llamada
    });

});


// Que es un mock? Es una simulacion