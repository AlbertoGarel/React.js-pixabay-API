import React from 'react';

const Imagen = (props) => {

    const {largeImageURL, likes, previewURL, tags, views} = props.imagen

    return (
        <div className="card">
            <img src={previewURL} alt={tags} className="card-img-top"/>
            <div className="card-body card-fondo">
                <p className="card-text">{likes} Me gusta </p>
                <p className="card-text">{views} Vistas </p>

                <a href={largeImageURL} target='_blank' rel="noreferrer" className="btn btn-primary btn-block">Ver imagen</a>
            </div>
        </div>
    )
}
export default Imagen