import React, { useContext } from "react";
import '../../styles/Card.css';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = ({ contact }) => {
	const { actions } = useContext(Context);

	return (
		<div className="contactCard">
			<div className="containerCard">
				<div className="imagenContacto" >
					<img className="imagen" src="https://www.sunchales.gob.ar/sites/default/files/base_hombre.jpg" />
				</div>
				<div className="datosContacto">
					<h3 className="nombreContacto">{contact.name}</h3>
					<p className="movilContacto"><i className="fas fa-phone"></i>
						&nbsp; {contact.phone}
					</p>
					<p className="correoContacto"><i className="fas fa-envelope"></i>
						&nbsp; {contact.email}
					</p>
					<p className="direccionContacto"><i className="fas fa-map-marker-alt"></i>
						&nbsp; {contact.address}
					</p>
					<br />
				</div>
				<div className="botonesFinal">
					<Link to="/AddContact">
						<i className="far fa-edit fa-2x" onClick={() => actions.setContactEdit(contact)}></i>
					</Link>
					<button className="botonEliminar">
						<i className="far fa-trash-alt fa-2x" onClick={() => actions.eliminarContacto(contact.id)}></i>
					</button>
				</div>
			</div>
		</div>
	);
};
	export default Card;