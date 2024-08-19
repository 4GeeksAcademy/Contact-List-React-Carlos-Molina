import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<i class="fas fa-book"></i>
					&nbsp; Agenda
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn-success">Crear Contacto</button>
				</Link>
			</div>
		</nav>
	);
};
