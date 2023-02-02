import React, {useState} from 'react';
import Modal from "./Modal";

const ImageGalleryItem = ({image}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const {webformatURL, largeImageURL, tags} = image;

    return (
        <div className="card">
            <img onClick={toggleModal} src={webformatURL} alt={tags} className="card-image"/>
            {isModalOpen
                && <Modal largeImageURL={largeImageURL}
                          tags={tags}
                          onClose={toggleModal}/>}
        </div>
    );
};

export default ImageGalleryItem;

