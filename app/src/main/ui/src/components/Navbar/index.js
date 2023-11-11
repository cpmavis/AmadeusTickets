import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/booking" activeStyle>
            Bookings
          </NavLink>
          <NavLink to="/notification" activeStyle>
            Notifications
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;