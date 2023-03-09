import React from 'react'
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <>
     <header className="primary-header flex">
          <div className="logo flex">
            <div>
              <h1>Pariwesh</h1>
            </div>

            <div>
              <h1 className="line"> {"<"}Web Developer {">"}</h1>
            </div>
          </div>

          <div className="right">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="menu-icon"
            ><i className="fa-solid fa-bars"></i
            ></label>
            <ul className="navigation flex">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </header>
    
    </>
  )
}
