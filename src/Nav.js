import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(()=> {
        window.addEventListener("scroll", ()=> {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return() => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
      <div className={`nav ${show && "nav__black"}`}>
        <img
          className="nav__logo"
          src="https://lh3.googleusercontent.com/proxy/lZvtjd9ZmZzTbHkQpZUVpLv86GwvTUpF24x1r8DXModMoHBJit0i4qAX6pGvoR4iWbf_fuZg3ijdQWIzn6WF5cKEns6261WXanLqNi1IAnaRKy0SMmM"
          alt="Netflix Logo"
        />
        <button className="nav__button">Sign In</button>
      </div>
    );
}

export default Nav
