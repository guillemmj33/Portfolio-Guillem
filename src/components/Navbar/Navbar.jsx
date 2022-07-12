import React from 'react';
import './Navbar.scss';
import logo from '../../assets/Images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-bar navbar-expand-lg navbar-light fixed-top">
			<div className="container">
				<a className="navbar-brand" href="index.html">
					<img src={logo} alt="Guillem Logo" />
				</a>

				<div className="collapse navbar-collapse" id="navbarsExampleDefault">
					<ul className="navbar-nav mx-auto">
						<li className="nav-item active">
								<a className="nav-link" href="index.html">Home</a>
						</li>

						<li className="nav-item active">
								<a className="nav-link" href="#projects--background-color">Projects</a>
						</li>

						<li class="nav-item active">
								<a className="nav-link" href="#contact--page">Contact</a>
						</li>
					</ul>
					<a href="#contact--page"><button type="button" className="btn btn-primary">Let's chat</button></a>
				</div>
			</div>
		</nav>
  );
}

export default Navbar;