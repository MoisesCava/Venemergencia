import React from 'react'

const Title = ({ children, color, ...props}) => {
    return (
        <h2 className={color}>
            {children}
        </h2>
    )
}

export default Title
