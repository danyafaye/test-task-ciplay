import React from "react";
import "./Input.css"

const TextError = props => {
    return(
        <div className='error'>
            {props.children}
        </div>
    )
}

export default TextError;