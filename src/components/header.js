import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headshot from '../../static/headshot.jpg'

import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.item}>
                <img
                    className={headerStyles.headshot}
                    src={headshot}
                    alt="Alec Gillis"
                />
            </div>
            <div>
                <h1 className={headerStyles.htitle}>
                    <Link className={headerStyles.title} to="/">
                        {data.site.siteMetadata.author}
                    </Link>
                </h1>
            </div>
            <div className={headerStyles.divNav}>
                <nav className={headerStyles.nav}>
                    <ul className={headerStyles.navList}>
                        <li>
                            <Link className={headerStyles.navItem} to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={headerStyles.navItem}
                                to="/projects"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={headerStyles.navItem}
                                to="/contact"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} to="/blog">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} to="/now">
                                Now
                            </Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} to="/books">
                                Books
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
