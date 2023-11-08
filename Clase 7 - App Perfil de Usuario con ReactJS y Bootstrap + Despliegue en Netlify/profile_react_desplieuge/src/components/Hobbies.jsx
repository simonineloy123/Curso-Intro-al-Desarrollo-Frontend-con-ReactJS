import React from 'react';

function Hobbies() {
    //Datos ficticios de Hobbies

    const hobbies = [
        {
            id: 1,
            nombre: 'Senderismo',
            descripcion: 'Explorar montañas',
        },

        {
            id: 2,
            nombre: 'Fotografia',
            descripcion: 'Capturar momentos especiales con mi camara',
        },

        {
            id: 3,
            nombre: 'Pintura al oleo',
            descripcion: 'Crear obras de arte en lienzo',
        },

        {
            id: 4,
            nombre: 'Jardineria',
            descripcion: 'Cultivar plantas y flores en mi jardin',
        },

    ];

    return(
        <div className="container">
            <h2>Mis Hobbies</h2>
            <ul className="list-group">
                {hobbies.map((hobby) => (
                    <li key={hobby.id} className="list-group-item">
                        <h3>{hobby.nombre}</h3>
                        <p>{hobby.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Hobbies;