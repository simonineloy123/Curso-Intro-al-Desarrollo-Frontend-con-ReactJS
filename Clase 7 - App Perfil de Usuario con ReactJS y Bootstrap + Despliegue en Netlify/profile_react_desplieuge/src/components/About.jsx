import React from 'react';

function About() {
    //Datos ficticios del componente Acerca De

    const aboutData = {
        nombre: 'Juan Perez',
        edad: 30,
        profesion: 'Desarrollador Web',
        descripcion: 'Soy un apasionado desarrollador web con experiencia en tecnologias como React, Node.js y Bootsrap. Me encanta crear aplicaciones web creativas y funcionales para mis clientes. Fuera del trabajo, disfruto de la musica, la lectura y el senderismo de la naturaleza.',
    };

    return (
        <div className="container">
            <h2>Acerca de Mi</h2>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{aboutData.nombre}</h3>
                    <p className="card-text">Edad: {aboutData.edad}</p>
                    <p className="card-text">Profesion: {aboutData.profesion}</p>
                    <p className="card-text">{aboutData.descripcion}</p>
                </div>
            </div>
        </div>
    );
}

export default About;