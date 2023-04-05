import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ nuevaCategoria }) => {

    // Hook useState.
    // Manejar el estado del input
    const [valorInput, setValorInput] = useState('');


    // Funcion para manejar los cambios en el input.
    // Recibe el 'event' del input.
    // Se obtiene el 'value' para obtener los cambios.
    const cambioDelInput = ( event ) => {
        const { value } = event.target;
        setValorInput( value );
    }


    // Funcion para el posteo del formulario
    const posteoFormulario = ( event ) => {
        event.preventDefault(); // No se recarga el navegador

        // Se valida un numero minimo de caracteres en el input para que sea agregada
        // la nueva categoria
        if ( valorInput.trim().length <= 3 ) {
            return;
        }

        // Se envia el nuevo valor a la funcion de agregarCategoria,
        // para que sea agregado a la lista de categorias.
        nuevaCategoria( valorInput );
        setValorInput(''); // Reseteo del formulario
    }


    return (
        <>

            <form
                onSubmit={ posteoFormulario }
                aria-label='form'
            >
                <input
                    type="text"
                    placeholder='Buscar gifs'
                    value={ valorInput }
                    onChange={ cambioDelInput }
                />
            </form>

        </>
    )
}

// PropTypes
AddCategory.propTypes = {
    nuevaCategoria: PropTypes.func.isRequired
}