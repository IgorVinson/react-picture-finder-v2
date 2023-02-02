import React from 'react';

const Button = (props) => {
    const {loadMore} = props;
    return (
        <button className='load-more-button' type="button" onClick={loadMore}>Load more</button>
    );
};

export default Button;