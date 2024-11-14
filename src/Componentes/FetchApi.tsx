import React, { useState } from "react";

// https://pokeapi.co/api/v2/pokemon/

export default function FetchApi() {
  const [name, setName] = useState("");
  const [data,setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  function fetchData(){
    setData(null);setError(null);setLoading(true);

    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then(response => {
        if (!response.ok) throw new Error();
        return response.json();
      })

      .then(data => {
        setData(data);
        setLoading(false);
      })

      .catch(error => {
        setError(error);
        setLoading(false);
      });
    
    }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px",
      }}
    >
      <h1>Fetch API</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar pokemon"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary" type="submit" onClick={fetchData}>
          Buscar
        </button>
      </div>
      {error && <h3>Ha ocurrido un error</h3>}
      {loading && <h3>Cargando...</h3>}
      {data && (
        <>
          <h3>Datos obtenidos:</h3>
          <img
            src={data.sprites.other["official-artwork"].front_default}
            width={200}
          />
          <span>ID: {data.id}</span>
          <span>Nombre: {data.name}</span>
          <span>Altura: {data.height}</span>
          <span>Peso: {data.weight}</span>
        </>
      )}
    </div>
  );
};
