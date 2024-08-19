import React, { Component } from "react";
import "../../styles/Card.css";

export const Card = () => (
	<div className="contactCard">
		<div className="containerCard">
			<div className="imagenContacto" >
				<img className="imagen" src="https://www.sunchales.gob.ar/sites/default/files/base_hombre.jpg" />
			</div>
			<div className="datosContacto">
				<h3 className="nombreContacto">Carlos Molina</h3>
				<p className="direccionContacto"><i className="fas fa-map-marker-alt"></i>
					&nbsp; 30011, C/ Vicente Aleixandre, 19
				</p>
				<p className="movilContacto"><i className="fas fa-phone"></i>
					&nbsp; +34 689 200 151
				</p>
				<p className="correoContacto"><i className="fas fa-envelope"></i>
					&nbsp; carlosm12.inves@gmail.com
				</p>
			</div>
			<div className="botonesFinal">
				<button className="botonEditar">
					<i className="fas fa-edit"></i>
				</button>
				<button className="botonEliminar">
					<i className="fas fa-trash-alt"></i>
				</button>
			</div>
		</div>
	</div>
);
