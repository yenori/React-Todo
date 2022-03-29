import React from 'react';
import PropTypes from "prop-types";

Album.propTypes = {
    album: PropTypes.object.isRequired,
};
function Album({album}) {
    return (
        <div className="container">
            <div className="item">
                <img src={album.img_src} alt=""/>
                <span>{album.title}</span>
            </div>
        </div>
    );
}

export default Album;