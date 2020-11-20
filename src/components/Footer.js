import React from 'react'
import app_config from '../config/app_config'

export const Footer = () => {
    const author = app_config.AUTHOR

    return (
        <div>
            <p>Made with 💗 by {author} | {new Date().getFullYear()} </p>
        </div>
    )
}
