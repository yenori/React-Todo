import React from 'react';
import PropTypes from 'prop-types';
import ListAlbum from "./components/ListAlbum";

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            'id':1,
            'title':'Những bài hát gây nghiện',
            'img_src':'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/4/0/d/d/40dd9e4631e897cb97685ebffdc5b962.jpg',
        },
        {
            'id':2,
            'title':'Nhà nhà nghe gì ?',
            'img_src':'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/1/1/b/0/11b08b5916d89b8e30480d46d2a2ba91.jpg',
        },
        {
            'id':3,
            'title':'Us Uk có gì hot ?',
            'img_src':'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/6/8/1/f/681fe2234d52d7da98f3a4b628868c6d.jpg',
        }
    ];
    return (
        <div>
            <h2>Có thể bạn thích</h2>
            <AlbumFeature listAlbum={albumList}/>
        </div>
    );
}

export default AlbumFeature;