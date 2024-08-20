import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/AddContact.css";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	
	const navigate = useNavigate();

	useEffect(() => {
		if (store.contactEdit) {
			setName(store.contactEdit.name);
			setEmail(store.contactEdit.email);
			setPhone(store.contactEdit.phone);
			setAddress(store.contactEdit.address);
		}
	}, [store.contactEdit]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const contactoEditado = {
			name: name,
			phone: phone,
			email: email,
			address: address,
		};

		if (store.contactEdit) {
			actions.editarContacto(store.contactEdit.id, contactoEditado);
		} else {
			actions.crearContacto(contactoEditado);
		}
		actions.clearContactEdit();
		navigate("/");
	};

	return (
		<div>
			<form className="containerAñadirContactos" onSubmit={handleSubmit}>
				<p>Nombre completo</p>
				<input
					className="form-control"
					type="text"
					value={name}
					placeholder="Nombre"
					aria-label="default input example"
					onChange={(e) => setName(e.target.value)} 
					required >
				</input>

				<br></br>

				<p>Número de teléfono</p>
				<input
					className="form-control"
					type="number"
					value={phone}
					placeholder="Teléfono"
					aria-label="default input example"
					onChange={(e) => setPhone(e.target.value)} 
					required >
				</input>

				<br></br>

				<p>Correo Electrónico</p>
				<input
					className="form-control"
					type="email"
					value={email}
					placeholder="Correo"
					aria-label="default input example"
					onChange={(e) => setEmail(e.target.value)} 
					required >
				</input>

				<br></br>

				<p>Dirección postal</p>
				<input
					className="form-control"
					type="text"
					value={address}
					placeholder="Dirección"
					aria-label="default input example"
					onChange={(e) => setAddress(e.target.value)} 
					required >
				</input>

				<br></br>

				<button className="btn btn-success" type="submit">Añadir contacto</button>
			</form>

			<br></br>

			<form className="volverContactos">
				<Link to="/">
					<button className="btn btn-primary">Volver Agenda</button>
				</Link>
			</form>
		</div>
	);
};
