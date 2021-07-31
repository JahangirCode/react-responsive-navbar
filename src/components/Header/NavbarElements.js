import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    background-color: #1f5156;
    display: flex;
    height: 80px;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 9999;
`;

export const NavContainer = styled.div`
    padding: 0 15px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }

    @media (min-width: 1200px) {
        max-width: 1152px;
    }

    @media (min-width: 1400px) {
        max-width: 1300px;
    }
`;

export const Logo = styled(NavLink)`
    color: #f5b921;
    align-items: center;
    cursor: pointer;
    font-size: 2rem;
    font-weight: 800;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 992px) {
        display: flex;
        font-size: 1.8rem;
        cursor: pointer;
        color: #ffdd40;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 992px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 4rem 0;
        border-top: 1pxsolid #fff;
        position: absolute;
        top: 80px;
        background-color: #1f5156;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    }
`;

export const NavItem = styled.li`
    line-height: 40px;
    margin-right: 1rem;

    &::after {
        content: '';
        display: block;
        height: 3px;
        width: 0;
        background: transparent;
        transition: width 0.7s ease, background-color 0.5s ease;
    }

    &:hover::after {
        width: 100%;
        background: #ffdd40;
    }

    @media screen and (max-width: 992px) {
        margin-bottom: 1.2rem;
    }
`;

export const NavLinks = styled(NavLink)`
    color: #fff;
    padding: 0.5rem 1rem;

    &.active {
        color: #ffdd40;
        border: 1px solid #ffdd40;
    }
`;
