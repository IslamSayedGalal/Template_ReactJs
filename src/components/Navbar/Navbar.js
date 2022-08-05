import React from "react";
import {NavbarSection,Logo, LogoText,UlList,ListItem,Anchor, LinkItem} from './style.js'

const Navbar = () =>{
    return(
        <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                <UlList>
                    <ListItem><LinkItem to="/">Home</LinkItem></ListItem>
                    <ListItem><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="#">About</Anchor></ListItem>
                    <ListItem><LinkItem to="/contact">Contact</LinkItem></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>
    )
}

export default Navbar;
