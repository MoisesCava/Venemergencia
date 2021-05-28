import React from 'react'

const Content = ({children, color, ...props}) => {
    return (
        <p className={color}>
            {children}
        </p>
    )
}

export default Content
