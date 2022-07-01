import React from 'react';
import './Accueil.css';
import Navbar from '../components/Navbar';

function Accueil() {

  return (
    <>
      <Navbar />
      <div className="bio">
        <div className="titre">
          <h1>PROJECT X</h1>
        </div>
        <div className="sous-titre">
          <h3>Descriptif</h3>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Et voluptatem debitis a nostrum repellat in autem veritatis qui temporibus optio qui eaque deserunt. Est tenetur quos et iure repudiandae est laboriosam blanditiis nam ullam perferendis eos saepe inventore in distinctio excepturi sit adipisci expedita.</p>
        <div className="sous-titre-2">
          <h3>Contributors</h3>
        </div>
        <div className="portrait">
          <img src="src/assets/pexels-1.jpg" alt="" width="100" height="100" />
          <img src="src/assets/pexels-2.jpg" alt="" width="100" height="100" id="img-2" />
          <img src="src/assets/pexels-3.jpg" alt="" width="100" height="100" id="img-3" />
          <img src="src/assets/pexels-4.jpg" alt="" width="100" height="100" />
          <img src="src/assets/pexels-5.jpg" alt="" width="100" height="100" id="img-5" />
          <img src="src/assets/pexels-6.jpg" alt="" width="100" height="100" />
        </div>
        <div className="profil">
          <p>Dev-web</p>
          <p>Dev-web</p>
          <p>Dev-web</p>
          <p>Scrum Master</p>
          <p>Dev-web</p>
          <p>Dev-web</p>
        </div>

        <div className="objectif">
          <div className="sous-titre-3">
            <h3>Objectif</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Et voluptatem debitis a nostrum repellat in autem veritatis qui temporibus optio qui eaque deserunt. Est tenetur quos et iure repudiandae est laboriosam blanditiis nam ullam perferendis eos saepe inventore in distinctio excepturi sit adipisci expedita.</p>
        </div>
        <div className="sous-titre-4">
          <h3>Outils</h3>
        </div>
        <div className="tech">
          <img src="src/assets/React-icon.svg.png" width="100" height="100" id="logo-1" />
          <img src="src/assets/Javascript.svg.png" width="100" height="100" id="logo-2" />
          <img src="src/assets/Nodejs.svg.png" width="100" height="100" id="logo-3" />
          <img src="src/assets/ExpressJS-logo.png" width="100" height="100" id="logo-4" />
          <img src="src/assets/MySQL.svg.png" width="100" height="100" id="logo-5" />
        </div>
      </div>
    </>



  );
}



export default Accueil;