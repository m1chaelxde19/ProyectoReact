import React from "react";
import { Character } from "../Hooks/types";

const PersonajeCard: React.FC<{ character: Character }> = ({ character }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={character.image}
          className="card-img-top"
          alt={character.name}
        />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">
            <strong>Estado:</strong> {character.status} <br />
            <strong>Especie:</strong> {character.species}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonajeCard;