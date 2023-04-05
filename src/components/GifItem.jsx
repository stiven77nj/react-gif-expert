import React from 'react';
import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
    return (
        <>
            <div className='card'>
                <h5>{title}</h5>
                <img src={url} alt={title} />
            </div>
        </>
    )
}


// PropTypes
GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}