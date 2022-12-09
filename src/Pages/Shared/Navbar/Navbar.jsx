import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { FaTimes, FaBars, FaCode, FaHome } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen, AiFillInfoCircle } from 'react-icons/ai';
import logo from '../../../assets/logo-png/logo-no-background.png';

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<nav className="navbar">
			<div className="nav-container">
				<NavLink to="/" className="nav-logo font-extrabold flex gap-2">
					<img src={logo} alt="" className='w-[20%]' />
				</NavLink>

				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className="nav-item">
						<NavLink
							to="/"
							activeclassname="active"
							className="nav-links flex items-center gap-2"
							onClick={handleClick}>
							<FaHome />
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/about"
							activeclassname="active"
							className="nav-links flex items-center gap-2"
							onClick={handleClick}>
							<AiFillInfoCircle />
							About
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/projects"
							activeclassname="active"
							className="nav-links flex items-center gap-2"
							onClick={handleClick}>
							<AiOutlineFundProjectionScreen />
							Projects
						</NavLink>
					</li>
				</ul>
				<div className="nav-icon" onClick={handleClick}>
					<span>{click ? <FaTimes /> : <FaBars />}</span>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
