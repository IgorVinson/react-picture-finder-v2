import React from 'react';

const Modal = ({largeImageURL, tags, onClose}) => {

    return (
        <div className="modal">
            <img
                onClick={onClose}
                src={largeImageURL}
                alt={tags}
                className="modal-image"/>
        </div>
    );
};

export default Modal;