import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata{
                    author
                }
            }
        }
    `)

    return (
      <header className={headerStyles.header}>
        <h1 className={headerStyles.htitle}>
            <Link className={headerStyles.title} to="/">
                {data.site.siteMetadata.author}
            </Link>
        </h1>
        <h2 className={headerStyles.snippit}>
            Now with 30% more coffee!
        </h2>
        <nav className={headerStyles.nav}>
            <ul className={headerStyles.navList}>
                <li>
                    <Link className={headerStyles.navItem} to="/">Home</Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} to="/about">About</Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} to="/contact">Contact</Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} to="/blog">Blog</Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} to="/now">Now</Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} to="/books">Books</Link>
                </li>
            </ul>
        </nav>
      </header>
    )
}

export default Header