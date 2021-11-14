import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    // menu bar here
    <div className="container mt-sm-2">
      <h2 className="text-start mt-5">TWO WHEELERS:</h2>
      <nav className="navbar mb-4 navbar-expand-lg navbar-light bg-light">
        <div className="ms-5 me-5 p-3">
          <Link
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Motorcycles/Scooters
          </Link>
          <ul
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <Link className="dropdown-item">Motorcycles</Link>
            </li>
            <li>
              <Link className="dropdown-item">Scooters</Link>
            </li>
          </ul>
        </div>
        <div className="ms-5 me-5 p-3">
          <Link
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Selects type of cc
          </Link>
          <ul
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <Link className="dropdown-item">100 cc</Link>
            </li>
            <li>
              <Link className="dropdown-item">200 cc</Link>
            </li>
            <li>
              <Link className="dropdown-item"> 250 cc</Link>
            </li>
          </ul>
        </div>
        <div className="ms-5 ms-5 me-5 p-3">
          <Link
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Distance from centre of Glostrup
          </Link>
          <ul
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <Link className="dropdown-item" href="#">
                Less than 3 km
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Less than 3 km
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
