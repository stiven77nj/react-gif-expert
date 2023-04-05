import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en useFetchGifs', () => {

    test('Debe de regresar el estado inicial', () => {
        // Se renderiza el customHook y se obtiene el resultado
        const { result } = renderHook(() => useFetchGifs('valorant'));
        // Del resultado se desestructura la data y el loading
        const { data, isLoading } = result.current;
        expect(data.length).toBe(0); // La data debe ser cero inicialmente
        expect(isLoading).toBeTruthy(); // isLoading debe estar en true
    });

    test('Debe de retornar un arreglo de imagenes y el isLoading en false', async () => {
        // Se renderiza el customHook y se obtiene el resultado
        const { result } = renderHook(() => useFetchGifs('valorant'));
        // Esperar la prueba hasta que se cumpla la condicion
        await waitFor(
            () => expect(result.current.data.length).toBeGreaterThan(0),
        );
        // Del resultado se desestructura la data y el loading
        const { data, isLoading } = result.current;
        expect(data.length).toBeGreaterThan(0); // La data debe ser diferente
        expect(isLoading).toBeFalsy(); // isLoading debe estar en false
    });

});