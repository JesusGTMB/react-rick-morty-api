import { useEffect, useState } from "react";
import Character from "./Character";

function Navpage(props) {
  return (
    <header className="d-flex justify-content-between">
      <button
        className="btn btn-primary"
        onClick={() => {
          if (props.page > 1) {
            props.setPage(props.page - 1);
          }
        }}
      >
        Pagina Anterior {props.page - 1}
      </button>
      <p>Pagina Actual:{props.page}</p>
      <button
        className="btn btn-primary"
        onClick={() => props.setPage(props.page + 1)}
      >
        Pagina Siguiente {props.page + 1}
      </button>
    </header>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <Navpage page={page} setPage={setPage} />
      {loading ? (
        <h1>Cargando.....</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <Navpage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
