import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";



const Navbar = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero').offsetHeight;
      const scrollPosition = window.scrollY;
      
      if (scrollPosition >= heroHeight) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const [click, setClick] =
    useState(false); /*creates opposite state to open and close menu on click*/

  const handleClick = () => setClick(!click); /*reverses false click state set*/
  const closeMobileMenu = () => setClick(false);
  
  return (
      <nav className={`navbar ${isShrunk ? 'navbar-shrink' : ''}`} >
        <div className="navbar-container">
          <a href="#top" className="navbar-logo">
            Kaiju's{" "}
            <img src="/kaijusgrub/images/logo_.png" id="nav-logo" alt="Kaiju's Grub" />{" "}
            Grub
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />{" "}
            {/*? is equal to true. : creates toggle from one item to another.  */}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <AnchorLink href="#top" className="nav-links" onClick={closeMobileMenu}>
                Home
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                href="#about"
                className="nav-links"
                onClick={closeMobileMenu}>
                About
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                href="#menu"
                className="nav-links"
                onClick={closeMobileMenu}>
                Menu
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                href="#contact"
                className="nav-links"
                onClick={closeMobileMenu}>
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
