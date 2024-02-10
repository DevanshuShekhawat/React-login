import React from "react";

function Header() {
    return (
        <section id="header">
        <div className="header container">
          <div className="nav-bar">
            <div className="brand">
              <a href="#home">
                <h1><span>C</span>alm <span>C</span>onnect</h1>
              </a>
            </div>
            <div className="nav-list">
              <div className="hamburger">
                <div className="bar"></div>
              </div>
              <ul>
                <li><a href="#Home" data-after="Home">Home</a></li>
                <li><a href="#Abouts" data-after="About">About</a></li>
                <li><a href="#Blogs" data-after="blogs">Blogs</a></li>
                <li><a href="#Ourstory" data-after="Our Story">Our Story</a></li>
                <li><a href="#Contact" data-after="Contact">Contact</a></li>
               
              </ul>
            </div>
          </div>
        </div>
      </section> 
    )
}

export default Header