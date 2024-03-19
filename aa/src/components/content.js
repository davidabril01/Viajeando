import Carrusel from "./carousel";
import MenuGeneral from "./menu-general";
import Products from "./products";
import { useState } from 'react';

import "./content.css"

function Content() {
    const [destination, setDestination] = useState('');
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [rooms, setRooms] = useState('');
    const [adults, setAdults] = useState('');
    const [children, setChildren] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica para enviar el formulario
    };

    return (
        <main>
            <div className="container mt-5">
                <div className="row">
                    <div className="tarjeta col-md-8 mx-auto justify-content-evenly">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Reserva de Viaje</h5>
                                <form className="row g-3" onSubmit={handleSubmit}>
                                    <div className="col-sm-3 position-relative">
                                        <label htmlFor="destination" className="form-label">Buscar Destino:</label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control form-control__search"
                                                id="destination"
                                                name="destination"
                                                value={destination}
                                                onChange={(e) => setDestination(e.target.value)}
                                                required
                                            />
                                            <span className="input-group-text">
                                                <i className="fas fa-plane"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <label htmlFor="checkin" className="form-label">Fecha de Inicio</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="checkin"
                                            name="checkin"
                                            value={checkin}
                                            onChange={(e) => setCheckin(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-2">
                                        <label htmlFor="checkout" className="form-label">Fecha de Finalización</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="checkout"
                                            name="checkout"
                                            value={checkout}
                                            onChange={(e) => setCheckout(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-1">
                                        <label htmlFor="rooms" className="form-label">Habitaciones</label>
                                        <div className="custom-dropdown">
                                            <select
                                                className="form-select"
                                                id="rooms"
                                                name="rooms"
                                                value={rooms}
                                                onChange={(e) => setRooms(e.target.value)}
                                                required
                                            >
                                                <option selected disabled>Seleccionar</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-1">
                                        <label htmlFor="adults" className="form-label">Adultos</label>
                                        <select
                                            className="form-select"
                                            id="adults"
                                            name="adults"
                                            value={adults}
                                            onChange={(e) => setAdults(e.target.value)}
                                            required
                                        >
                                            <option selected disabled>Seleccionar</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-1">
                                        <label htmlFor="children" className="form-label">Menores</label>
                                        <select
                                            className="form-select"
                                            id="children"
                                            name="children"
                                            value={children}
                                            onChange={(e) => setChildren(e.target.value)}
                                            required
                                        >
                                            <option selected disabled>Seleccionar</option>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="btn btn-primary">
                                            <i className="fas fa-search"></i> BUSCAR
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Content;
