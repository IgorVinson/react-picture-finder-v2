import ImageGalleryItem from "./ImageGalleryItem";
import Loader from "./Loader";

const ImageGallery = ({images}) => {

    return (
        <div className="gallery">
            {(images.length === 0) ? <Loader/> : images.map(image => <ImageGalleryItem key={image.id} image={image}/>)}
        </div>
    );
};


export default ImageGallery;