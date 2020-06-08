import React from "react";

const BASE_URL = "https://image.tmdb.org/t/p/w500";

const Image = (props) => {
    const { url, className } = props;

    return (
        <img src={`${BASE_URL}${url}`} className={className} alt="" />
    )
}
export default Image;