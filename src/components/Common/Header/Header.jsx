import React, { useEffect, useState } from "react";
import Logo from '../../../assets/images/Logo.png';
import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
  Dropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Header/header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky)
    }
  })

  // sticky Header 
  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add('is-sticky') :
      header.classList.remove('is-sticky')
  }

  const closeMenu = () => {
    if (window.innerWidth <= 991) {
      setOpen(false)
    }
  }


  return (

    <header className="header-section">
      <Container>

        <Navbar expand="lg" className="p-0">
          {/* Logo  */}
          <Navbar.Brand>
            <NavLink to="/"><img src={Logo} alt="Andes2 Amazon Logo" className="logo-image" /> </NavLink>
          </Navbar.Brand>
          {/* Final Logo   */}

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={open}
          >
            {/*mobile Logo Section  */}
            <Offcanvas.Header>
              <div className="logo-section">
                <img src={Logo} alt="Andes2 Amazon Logo" className="logo-image" />
                <h1 className="logo">Andes2 Amazon</h1>
              </div>
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>
            {/*end mobile Logo Section  */}



            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/" onClick={closeMenu}>
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/about-us" onClick={closeMenu}>
                  ABOUT US
                </NavLink>
                <NavLink className="nav-link" to="/tours" onClick={closeMenu}>
                  TOURS
                </NavLink>
                <NavDropdown
                  title="DESTINATION"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >


                  <NavLink className="nav-link text-dark" to="/tours" onClick={closeMenu}>
                    Bolivia Tours
                  </NavLink>
              
                  <NavLink className="nav-link text-dark" to="/destinations" onClick={closeMenu}>
                    Argentina Tours
                  </NavLink>
                  <NavLink className="nav-link text-dark" to="/destinations" onClick={closeMenu}>
                    Peru Tours
                  </NavLink>


                </NavDropdown>
                <NavLink className="nav-link" to="/blog" onClick={closeMenu}>
                  BLOG
                </NavLink>
                <NavLink className="nav-link" to="/contact-us" onClick={closeMenu}>
                  CONTACT
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="ms-md-4 ms-2">
            <Dropdown>
              <Dropdown.Toggle
                variant="primary"
                className="primaryBtn d-none d-sm-inline-block responsive-language-btn"
              >
                Language
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Español</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <li className="d-inline-block d-lg-none ms-3 toggle_btn">
              <i
                className={open ? "bi bi-x-lg" : "bi bi-list"}
                onClick={toggleMenu}
              ></i>
            </li>
          </div>
        </Navbar>


      </Container>
    </header>
  );
};

export default Header;
