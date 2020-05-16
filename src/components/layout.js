import React from 'react'

import Header from './header'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div>
            <Header />
            <div className={layoutStyles.container}>
                { props.children }
            </div>
        </div>
    )
}

export default Layout