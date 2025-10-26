import * as React from "react";
import "../styles/Card.css";
import Suki from '../assets/screen.png';
import Juan from '../assets/juan.jpeg';
import Marco from '../assets/marco.jpg';
import Ortiz from '../assets/ortiz.jpeg';
import Mendoza from '../assets/mechas.png';


function TeamMember({ imgSrc, name, title }) {
  return (
    <article className="team-member-card">
      <div className="image-container">
        <img
          loading="lazy"
          src={imgSrc}
          alt={name}
          className="team-member-image"
        />
      </div>
      <h2 className="team-member-name">{name}</h2>
      <p className="team-member-title">{title}</p>
    </article>
  );
}

function Team() {
  const teamMembers = [
    {
      imgSrc:
        Suki,
      name: "Andrés Moreno",
      title: "Lider, Programador",
    },
    {
      imgSrc:
        Mendoza,
      name: "David Mendoza",
      title: "Cara de la empresa",
    },
    {
      imgSrc:
        Marco,
      name: "Marco Boder",
      title: "Diseñador Grafico",
    },
    {
      imgSrc:
        Ortiz,
      name: "David Ortiz",
      title: "Mente Creativa",
    },
    {
      imgSrc:
        Juan,
      name: "Juan Delgado",
      title: "el del delivery",
    },

  ];

  // Create team member elements
  const teamMemberElements = teamMembers.map((member, index) => (
    <TeamMember key={index} {...member} />
  ));

  // Insert the CTA box at position 7 (last element of the second row)
  teamMemberElements.splice(
    7,
    0,
  );

  return (
    <section className="team-section">
      <div className="team-header">
        <h1 className="team-title">Conoce a nuestro equipo</h1>
        <p className="team-description">
          Detrás de Super Mendoza's Market hay un equipo dedicado de profesionales
          apasionados por ofrecerte la mejor experiencia de compra posible.
        </p>
      </div>

      <div className="team-container">
        <div className="team-grid">{teamMemberElements}</div>
      </div>
    </section>
  );
}

export default Team;