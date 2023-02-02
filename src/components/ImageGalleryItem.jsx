import React, {Component} from 'react';
import Modal from "./Modal";

class ImageGalleryItem extends Component {

    state = {
        isModalOpen: false,
    }

    toggleModal = () => {
        this.setState(({isModalOpen}) => ({
            isModalOpen: !isModalOpen,
        }));
    }

    render() {
        const {image} = this.props;
        const {webformatURL, largeImageURL, tags} = image;
        return (
            <div className="card">
                <img onClick={this.toggleModal} src={webformatURL} alt={tags} className="card-image"/>
                {this.state.isModalOpen
                    && <Modal largeImageURL={largeImageURL}
                              tags={tags}
                              onClose={this.toggleModal}/>}
            </div>
        );
    }
}

export default ImageGalleryItem;