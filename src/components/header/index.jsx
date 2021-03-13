import React, { useState } from "react";
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import Logo from "../logo";
import MenuHeader from "../menuheader";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="lg">
        <NavbarBrand href="/">
          <Logo />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <MenuHeader />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
