import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';


export const Layout = ({children}) => {
  return (
    <>
    <input type="checkbox" id="darkMode" className="dark-mode-checkbox" />

<div className="wrapper">
  <label htmlFor="darkMode"
  ><i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i
  ></label>

  <Header />

  {children}
  <Footer />
  </div>


    </>
  )
}
