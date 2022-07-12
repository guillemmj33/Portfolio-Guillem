import React from 'react';
import './Projects.scss';
import jordan from '../../assets/Images/jordan-peterson-web.png';
import drums from '../../assets/Images/drums-web.png';
import dewocracy from '../../assets/Images/dewocracy-pitch.png';
import mariano from '../../assets/Images/mariano-flyer.png';

const Projects = () => {
  return (
    <div id="projects--background-color" className="projects--background-color">
      <div className="container">
        <div className="projects--box">
          <div className="projects--box-1">
            <h2>My latest projects</h2>
            <p>
              Over the years, I've been creating designs for 
              startups of all sizes and adapted them to each 
              client's needs. Here are few of the most challenging 
              yet rewarding.
            </p>
            <div className="projects--box-1_1">
              <img src={jordan} alt="Jordan B. Peterson Website" />
            </div>
            <div className="projects--box-1_2">
            <img src={drums} alt="Drums Website" />
            </div>
          </div>
          <div className="projects--box-2">
            <div className="projects--box-2_1">
            <img src={dewocracy} alt="Dewocracy Pitch Deck" />
            </div>
            <div className="projects--box-2_2">
            <img src={mariano} alt="Drums Website" />
            </div>
            <div className="projects--box-2_3">
            <button>More+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;