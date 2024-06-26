import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  const [menuIcon, setMenuIcon] = useState();

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <div
              // to="/"
              className="navbar-search"
            >
              {/* onClick={() => setMenuIcon(false)} */}
              <input
                type="text"
                placeholder="enter your products"
                className="search"
              />
              <div className="search-icon">
                <FaSearch />
              </div>
            </div>
          </li>
          <li>
            <Link
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item"> 10 </span>
            </Link>
          </li>
        </ul>

        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .location {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 2rem;
  }
  .search {
    padding: 0.8rem 3rem;
  }
  .navbar-search {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .search-icon {
    font-size: 2rem;
  }
  .navbar-lists {
    display: flex;
    gap: 4rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 500;
        text-transform: uppercase;
        color:black;
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color:white;
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .close-outline {
    display: none;
  }

  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 2.6rem;
    }

    .cart-total--item {
      width: 2.4rem;
      height: 2.2rem;
      position: absolute;
      background-color: #000;
      color: #000;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 70%;
      background-color: white;
    }
  }

  .user-login--name {
    text-transform: capitalize;
  }

  .user-logout,
  .user-login {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }

  @media (max-width: 600px) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: black;

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: black;
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 30%;
      right: 10%;
      color:black;
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .navbar-lists {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      /* transform-origin: top; */
      // transition: all 3s linear;
    }

    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      // transition: all 3s linear;

      .navbar-link {
        font-size: 4.2rem;
      }
    }
    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 5.2rem;
      }

      .cart-total--item {
        width: 4.2rem;
        height: 4.2rem;
        font-size: 2.5rem;
      }
    }

    .user-logout,
    .user-login {
      font-size: 2.2rem;
      padding: 0.8rem 1.4rem;
    }
  }
`;

export default NavBar;
