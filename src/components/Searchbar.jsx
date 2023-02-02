import React from 'react';

const Searchbar = ({onSubmit}) => {
    return (
            <form className="search-form" onSubmit={onSubmit}>
                <input
                    className="searchInput"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        );
};

export default Searchbar;
