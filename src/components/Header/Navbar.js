import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Logo, MobileIcon, Nav, NavContainer, NavItem, NavLinks, NavMenu } from './NavbarElements';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    return (
        <>
            <Nav>
                <NavContainer>
                    <Logo to="/">jahangir.</Logo>
                    <MobileIcon onClick={handleClick}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu isOpen={isOpen}>
                        <NavItem onClick={handleClick}>
                            <NavLinks exact to="/">
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem onClick={handleClick}>
                            <NavLinks exact to="/service">
                                Service
                            </NavLinks>
                        </NavItem>
                        <NavItem onClick={handleClick}>
                            <NavLinks exact to="/pricing">
                                Pricing
                            </NavLinks>
                        </NavItem>
                        <NavItem onClick={handleClick}>
                            <NavLinks exact to="/blog">
                                Blog
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    );
}

export default NavBar;
