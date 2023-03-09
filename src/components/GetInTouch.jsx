import React from 'react'

export const GetInTouch = () => {
  return (
    <section className="section6 flex" id="contact">
    <h1 className="title">Get In Touch</h1>

    <div className="socials flex">
      <i className="fa-brands fa-linkedin"></i>
      <i className="fa-brands fa-github"></i>
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-twitter"></i>
    </div>

    <h1>OR</h1>

    <div className="email-section flex">
      <p>reach out over email</p>
      <div className="email">
        <a href="mailto:xyz@gmail.com">example@gmail.com</a>

        <div className="send">
          <i className="fa-solid fa-paper-plane"></i>
        </div>
      </div>
    </div>
  </section>
  )
}
