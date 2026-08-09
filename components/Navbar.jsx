import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isSticky ? "sticky sticky-active sticky-appear" : ""}>
      <nav className="navbar navbar-expand-lg header-transparent bg-transparent header-reverse glass-effect" data-header-hover="light">
        <div className="container-fluid">
          <div className="col-auto col-xxl-3 col-lg-2 me-lg-0 me-auto">
            <a className="navbar-brand" href="/">
              <img
                src="/images/logos/Ecell-logo.png"
                data-at2x="/images/logos/Ecell-logo.png"
                alt="E-Cell IIT Kharagpur"
                className="default-logo"
                style={{ height: "30px", width: "auto" }}
              />
              <img
                src="/images/logos/empresario-transparent-logo.png"
                data-at2x="/images/logos/empresario-transparent-logo.png"
                alt="Empresario"
                className="alt-logo"
                style={{ height: "30px", width: "auto", marginLeft: "15px" }}
              />
              <img
                src="/images/logos/empresario-transparent-logo.png"
                data-at2x="/images/logos/empresario-transparent-logo.png"
                alt="Empresario"
                className="mobile-logo"
                style={{ height: "30px", width: "auto", marginLeft: "15px" }}
              />
            </a>
          </div>
          <div className="col-auto col-xxl-9 col-lg-10 menu-order position-static">
            <button
              className="navbar-toggler float-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </button>
            <div className="mx-sm-0 collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav justify-content-evenly w-100">
                <li className="nav-item">
                  <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item dropdown dropdown-with-icon-style02">
                  <a href="/info" className="nav-link">
                    About <i className="dropdown-toggle" style={{ marginLeft: "10px" }}></i>
                  </a>
                  <i
                    className="fa-solid fa-angle-down dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></i>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                    style={{ backgroundColor: "white", color: "#1E2033" }}
                  >
                    <li>
                      <a href="/info" style={{ color: "#1E2033", fontWeight: "600" }}>Info</a>
                    </li>
                    <li>
                      <a href="/tracks" style={{ color: "#1E2033", fontWeight: "600" }}>Tracks</a>
                    </li>
                    <li>
                      <a href="/incentives" style={{ color: "#1E2033", fontWeight: "600" }}>Incentives</a>
                    </li>
                    <li>
                      <a href="/resources" style={{ color: "#1E2033", fontWeight: "600" }}>Resources</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="/services" className="nav-link">Services</a>
                </li>
                <li className="nav-item">
                  <a href="/winners" className="nav-link">Winners</a>
                </li>
                <li className="nav-item">
                  <a href="/associations" className="nav-link">Associations</a>
                </li>
                <li className="nav-item">
                  <a href="/media" className="nav-link" style={{ whiteSpace: "nowrap" }}>Sponsors & Media</a>
                </li>
                <li className="nav-item">
                  <a href="/mentors" className="nav-link">Mentors</a>
                </li>
                <li className="nav-item">
                  <a href="/contact-us" className="nav-link contact-link-margin">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
