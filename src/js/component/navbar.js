import React from "react";
import { Link } from "react-router-dom";
import "../../styles/AddContact.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<i className="fas fa-book"></i>
					&nbsp; Agenda
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/AddContact">
					<button className="btn-primary">Crear Contacto</button>
				</Link>
			</div>
		</nav>
	);
};
