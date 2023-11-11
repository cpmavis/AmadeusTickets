import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/booking" activestyle>
            Bookings
          </NavLink>
          <NavLink to="/notification" activestyle>
            Notifications
          </NavLink>
          <NavLink to="/" activestyle>
            Home
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;