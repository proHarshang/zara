import React from 'react'

const Tag = ({ children, classes }) => {
    return (
        <div className={`border-2 px-3 py-1 w-fit border-black ${classes}`}>{children}</div>
    )
}

export default Tag  