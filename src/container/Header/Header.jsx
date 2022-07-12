import React from 'react';
import './Header.scss';
import rectangle from '../../assets/Images/rectangle-dotted.png';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header--box">
          <div className="header--box-1">
            <img src={rectangle} alt="Rectangle Dotted" />
            <div className="header--box-1_up">
              <h1>UX/UI designer & web developer</h1>
              <p>Hi, I'm <b>Guillem</b>, a Barcelona-based UX/UI designer and web developer 🚀</p>
              <button>Hire me</button>
              <button>Projects</button>
            </div>
          </div>
          <div className="header--box-2">
          
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;