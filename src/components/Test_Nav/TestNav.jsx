import React from 'react'
import"./TestNav.css"
import { navLinks } from "../../constants/index.js";
import { logo } from "../../assets/images/export_file";

function TestNav() {
  return (
    <div>
        <header id="header">
        <img src={logo} alt="Paithrika Homes" />
        <nav role="navigation" id="nav-main" class="okayNav">
            <ul>
                {navLinks.map((nav)=>(
                    <li key={nav.id}>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            {/* <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contacts</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Testimonials</a></li> */}
            </ul>
        </nav>
        </header>
    </div>
  )
}

export default TestNav