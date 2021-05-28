import React from 'react'

const Link = ({ children, path, ...props }) => {
    return (
        <a href={path}>
            {children}
        </a>
    )
}

export default Link
