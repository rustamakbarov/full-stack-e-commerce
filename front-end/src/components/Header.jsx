import React from "react";

function Header({ setIsSearchShow }) {
  return (
    <>
      <header>
        <div className="global-notification">
          <div className="container">
            <p>
              SUMMER SALE FOR ALL SWM SUITS FREE EXPRESS INTERNATIONAL DELIVERY
              - OFF 50%! <a href="shop.html">SHOP NOW </a>
            </p>
          </div>
        </div>

        <div className="header-row">
          <div className="container">
            <div className="header-wrapper">
              <div className="header-mobile">
                <i className="bi bi-list"></i>
              </div>
              <div className="header-left">
                <a href="#" className="logo">
                  LOGO
                </a>
              </div>
              <div className="header-center" id="sidebar">
                <nav className="navigation">
                  <ul className="menu-list">
                    <li className="menu-list-item">
                      <a href="#" className="menu-link active">
                        Home
                        <i className="bi bi-chevron-down"></i>
                      </a>
                      <div className="menu-dropdown-wrapper">
                        <ul className="menu-dropdown-content">
                          <li>
                            <a href="#">Home Clean</a>
                          </li>
                          <li>
                            <a href="#">Home Collection</a>
                          </li>
                          <li>
                            <a href="#">Home Minimal</a>
                          </li>
                          <li>
                            <a href="#">Home Modern</a>
                          </li>
                          <li>
                            <a href="#">Home Parallax</a>
                          </li>
                          <li>
                            <a href="#">Home Strong</a>
                          </li>
                          <li>
                            <a href="#">Home Style</a>
                          </li>
                          <li>
                            <a href="#">Home Unique</a>
                          </li>
                          <li>
                            <a href="#">Home RTL</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="menu-list-item megamenu-wrapper">
                      <a href="shop.html" className="menu-link">
                        Shop
                        <i className="bi bi-chevron-down"></i>
                      </a>

                      <div className="menu-dropdown-wrapper">
                        <div className="menu-dropdown-megamenu">
                          <div className="megamenu-links">
                            <div className="megamenu-products">
                              <h3 className="megamenu-products-title">
                                Shop Style
                              </h3>
                              <ul className="megamenu-menu-list">
                                <li>
                                  <a href="#">Shop Standart</a>
                                </li>

                                <li>
                                  <a href="#">Shop Full</a>
                                </li>

                                <li>
                                  <a href="#">Shop Only Catagories</a>
                                </li>

                                <li>
                                  <a href="#">Shop Image Catagories</a>
                                </li>

                                <li>
                                  <a href="#">Shop Sub Catagories</a>
                                </li>

                                <li>
                                  <a href="#">Shop List</a>
                                </li>

                                <li>
                                  <a href="#">Hover Style 1</a>
                                </li>

                                <li>
                                  <a href="#">Hover Style 2</a>
                                </li>

                                <li>
                                  <a href="#">Hover Style 3</a>
                                </li>
                              </ul>
                            </div>

                            <div className="megamenu-products">
                              <h3 className="megamenu-products-title">
                                Filter Layout
                              </h3>
                              <ul className="megamenu-menu-list">
                                <li>
                                  <a href="#">Shop Standart</a>
                                </li>

                                <li>
                                  <a href="#">Shop Full</a>
                                </li>

                                <li>
                                  <a href="#">Shop Only Catagories</a>
                                </li>

                                <li>
                                  <a href="#">Shop Image Catagories</a>
                                </li>
                              </ul>
                            </div>

                            <div className="megamenu-products">
                              <h3 className="megamenu-products-title">
                                Shop Loader
                              </h3>
                              <ul className="megamenu-menu-list">
                                <li>
                                  <a href="#">Shop Standart</a>
                                </li>

                                <li>
                                  <a href="#">Shop Full</a>
                                </li>

                                <li>
                                  <a href="#">Shop Only Catagories</a>
                                </li>

                                <li>
                                  <a href="#">Shop Image Catagories</a>
                                </li>

                                <li>
                                  <a href="#">Shop Sub Catagories</a>
                                </li>

                                <li>
                                  <a href="#">Shop List</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="megamenu-single">
                            <a href="#">
                              <div className="megamenu-single-img">
                                <img src="img/mega-menu.jpg" alt="" />
                              </div>
                            </a>
                            <h3 className="megamenu-single-title">
                              Lorem, ipsum dolor.
                            </h3>
                            <h4 className="megamenu-single-subtitle">
                              Lorem ipsum dolor sit amet consectetur
                              adipisicing.
                            </h4>
                            <a
                              href="shop.html"
                              className="btn btn-sm megamenu-single-button"
                            >
                              Shop Now!
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="menu-list-item">
                      <a href="blog.html" className="menu-link">
                        {" "}
                        Blog{" "}
                      </a>
                    </li>

                    <li className="menu-list-item">
                      <a href="contact.html" className="menu-link">
                        {" "}
                        Contact{" "}
                      </a>
                    </li>
                  </ul>
                </nav>
                <i className="bi bi-x-circle" id="nav-close"></i>
              </div>
              <div className="header-right">
                <div className="header-right-links">
                  <a href="login.html" className="header-account">
                    <i className="bi bi-person"></i>
                  </a>

                  <button
                    className="search-button"
                    onClick={() => setIsSearchShow(true)}
                  >
                    <i className="bi bi-search"></i>
                  </button>

                  <a href="#">
                    <i className="bi bi-heart"></i>
                  </a>

                  <div className="header-cart">
                    <a href="cart.html" className="header-cart-link">
                      <i className="bi bi-bag"></i>
                      <span className="header-cart-count"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
