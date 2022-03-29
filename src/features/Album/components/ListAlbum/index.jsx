import React from 'react';
import PropTypes from 'prop-types';
import Album from "../../index";
import './style.scss';

ListAlbum.propTypes = {
    ListAlbum:PropTypes.array.isRequired,
};

function ListAlbum({listAlbum}) {
    return (
        <ul className="list-album">
            {listAlbum.map( (album) =>(
                <li key={album.id}>
                   111
                </li>
            ))}
        </ul>
    );
}

export default ListAlbum;