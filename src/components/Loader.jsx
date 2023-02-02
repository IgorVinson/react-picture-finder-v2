import React from 'react';
import {ThreeDots} from "react-loader-spinner";

const Loader = () => {
    return (
        <ThreeDots
            height="60"
            width="60"
            color="lightgrey"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    );
};

export default Loader;