import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/AddContact.css";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="containerAñadirContactos">
				<p>Nombre completo</p>
				<input class="form-control" type="text" placeholder="Nombre" aria-label="default input example"></input>
				<br></br>
				<p>Dirección postal</p>
				<input class="form-control" type="text" placeholder="Dirección" aria-label="default input example"></input>
				<br></br>
				<p>Número de teléfono</p>
				<input class="form-control" type="number" placeholder="Teléfono" aria-label="default input example"></input>
				<br></br>
				<p>Correo Electrónico</p>
				<input class="form-control" type="email" placeholder="Correo" aria-label="default input example"></input>
			</div>
			<br></br>
			<div className="volverContactos">
				<Link to="/">
					<button className="btn btn-primary">Volver Agenda</button>
				</Link>
				<button className="btn btn-success">Añadir contacto</button>
			</div>
		</div>
	);
};
