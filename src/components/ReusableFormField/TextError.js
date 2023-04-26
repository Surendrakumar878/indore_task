import React from 'react'

const TextError = (props) => {
    return (
        <div className='text-sm text-red-600' >
            {props.children}
        </div>
    )
}

export default TextError
