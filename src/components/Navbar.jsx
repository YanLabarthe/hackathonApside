import React from 'react';
import './Navbar.css';

const Navbar=()=> {
    return (
<div>
    <ul>
    <li><a className="active" href="#home">Projet Favoris</a></li>
    <li><a href="#news">Project-1</a></li>
    <li><a href="#contact">Project-2</a></li>
    <li><a href="#about">Project-3</a></li>
    <li><a className="active" href="#home">Project-List</a></li>
    <li><a href="#news">Project-1</a></li>
    <li><a href="#contact">Project-2</a></li>
    <li><a href="#about">Project-3</a></li>
    <li><a className="active" href="#home">Archived Project</a></li>
    <li><a href="#news">Project-toto</a></li>
    <li><a href="#contact">Project-cocu</a></li>
    <li><a href="#about">Project-bourré</a></li>
  </ul>
  </div>
    );
}

export default Navbar;