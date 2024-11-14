import React, { useState } from "react";
import useRickAndMorty from "../Hooks/useRickAndMorty";
import PersonajeCard from "./PersonajeCard";

const RickAndMortyApp = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useRickAndMorty(page);
  console.log(data);

  if (loading) return <div className="text-center mt-5">Cargando...</div>;

  if (error) return <div className="alert alert-danger">Error al cargar los datos.</div>;

  const handleNextPage = () => {
    if (data.info.next) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (data.info.prev) setPage(page - 1);
  };


  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Personajes de Rick y Morty</h1>
      <div className="row">
        {
        
          data && data.results ? (
            data.results.map((character) => (
              <PersonajeCard key={character.id} character={character} />
            ))
          ) : (
            <div className="alert alert-warning">
              No se encontraron personajes.
            </div>
          )
        }
      </div>
{/*       <div className="d-flex justify-content-between mt-4">
        <button
          className="btn btn-primary"
          onClick={handlePreviousPage}
          disabled={!data.info.prev}
        >
          Anterior
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={!data.info.next}
        >
          Siguiente
        </button>
      </div> */}
    </div>
  );
};

export default RickAndMortyApp;
