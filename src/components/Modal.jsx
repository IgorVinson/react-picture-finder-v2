import React from 'react';

const Modal = (props) => {
    const {largeImageURL, tags, onClose} = props;
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