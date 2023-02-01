import React, {Component} from 'react';
import ImageGalleryItem from "./ImageGalleryItem";

class ImageGallery extends Component {
    render() {
        return (

                <div className="gallery">
                    <ImageGalleryItem />
                    <ImageGalleryItem />
                    <ImageGalleryItem />
                    <ImageGalleryItem />
                </div>
        );
    }
}

export default ImageGallery;