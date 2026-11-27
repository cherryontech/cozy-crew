import { useState } from 'react';
import '../styles/header.css'
import ImageAsset from './ImageAsset'
import Button from './Button'
import promptfulLogo from '../assets/promptful-logo.svg'

const dropdownLinks = [
    { title: 'Pathfinder Quiz', href: '/pathfinder-quiz' },
    { title: 'My Learning Path', href: '/learning-path' },
    { title: 'Resource Hub', href: '/resource-hub' },
    { title: 'Careers Library', href: '/careers-library' },
    { title: 'My Progress', href: '/my-progress' },
]

const DropdownMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen)}

    return (
        <>
            <button type="button" className="learn-link text-body1" onClick={toggleMenu}>
                Learn <span className={`learn-dropdown-arrow ${isMenuOpen ? `clicked` : ``}`}></span>
            </button>

            {isMenuOpen && (
                <div className="learn-dropdown-menu">
                    <div className="dropdown-container text-body3 font-semibold">
                        {dropdownLinks.map((link, index) => {
                            return (
                                <a className="dropdown-link" href={link.href} key={index}>
                                    {link.title}
                                </a>
                            )
                        })}
                    </div>
            </div>
            )}
        </>
    )
}

const Header = () => {
    return (
        <header className="navbar">
            <div className='navbar-container'>
            <div className="image-container">
                <a href='/'>
                    <ImageAsset
                        asset={promptfulLogo}
                        alt="Prompful Logo"
                        width={155}
                        height={150}
                    />
                </a>
            </div>

            <input
                id="nav-toggle"
                className="nav-toggle"
                type="checkbox"
                aria-label="Toggle navigation menu"
            />
            <label
                htmlFor="nav-toggle"
                className="hamburger-btn"
                aria-hidden="true"
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </label>

            <nav className="nav-menu" aria-label="Main navigation">
                <ul className="link-list">
                    <li>
                        <a href="/" className="text-body1">
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="learn-link-wrapper">
                            <DropdownMenu />
                        </div>
                    </li>
                    <li>
                        <a href="/communities" className="text-body1">
                            Communities
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-body1">
                            About
                        </a>
                    </li>
                    <li className="button-list-mobile">
                        <Button variant="quiet" size="md" href="/#" icon={null} className=''>Log in &#10140;</Button>
                    </li>
                </ul>
                 </nav>
                <div className="button-list-desktop">
                    <Button variant="quiet" size="md" icon={null} className='' href="/login">Log in &#10140;</Button>
                    <Button variant="primary" size="md" icon={null} className='' href="/signup">Sign Up &#10140;</Button>
                </div>
            </div>
        </header>
    )
}

export default Header
