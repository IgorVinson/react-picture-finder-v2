import React, {Component} from 'react';
import ImageGalleryItem from "./ImageGalleryItem";
import Loader from "./Loader";

class ImageGallery extends Component {
    render() {
        const {images} = this.props;
        return (
            <div className="gallery">
                {(images.length === 0) ? <Loader/> : images.map(image => <ImageGalleryItem key={image.id} image={image}/>)}
                    </div>
                )
    }
}

export default ImageGallery;