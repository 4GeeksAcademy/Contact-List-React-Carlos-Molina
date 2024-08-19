import React, { Component } from "react";
import "../../styles/Card.css";

export const Card = () => (
	<div className="contactCard">
		<div className="card mb-3">
			<div className="row g-0">
				<div className="col-md-4">
					<img src="https://i.pinimg.com/originals/2f/e4/97/2fe497472d867b54a6e80928b6c48624.jpg" className="img-fluid rounded-start" alt="Imagen de Lobo" />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">Título de la tarjeta</h5>
						<p className="card-text">
							Descripción
						</p>
						<p className="card-text">
							<small className="text-muted">Teléfono</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);
