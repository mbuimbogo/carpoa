import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import menuStyles from './menuStyles';

const ListCointainer = styled.ul`
${tw`
flex
list-none
`}`;

const NavItem = styled.li`
${tw`
text-xs
md:text-base
text-black
font-medium
mr-1
md:mr-5
cursor-pointer
transition
duration-300
ease-in-out
hover:text-gray-700
`}
`
const NavItems = () => {
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm})

    if(isMobile)
    return (
<Menu right styles={menuStyles}>
<ListCointainer>
        <NavItem>
            <a href="#">Home</a>
        </NavItem>
        <NavItem>
            <a href="#">Cars</a>
        </NavItem>
        <NavItem>
            <a href="#">Services</a>
        </NavItem>
        <NavItem>
            <a href="#">Contact Us</a>
        </NavItem>
    </ListCointainer>
</Menu>)
  return (
    <ListCointainer>
        <NavItem>
            <a href="#">Home</a>
        </NavItem>
        <NavItem>
            <a href="#">Cars</a>
        </NavItem>
        <NavItem>
            <a href="#">Services</a>
        </NavItem>
        <NavItem>
            <a href="#">Contact Us</a>
        </NavItem>
    </ListCointainer>
  )
}

export default NavItems