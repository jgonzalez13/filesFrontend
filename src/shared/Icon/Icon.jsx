import React from 'react';
import "bulma/sass/utilities/_all.sass";
import "bulma/sass/elements/icon.sass";

const Icon = ({ name }) => {
    return(
        <span className="icon">
            <i className = {name}></i>
        </span>
    )
}

export default Icon;