import React from 'react'

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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </header>
    
    </>
  )
}
