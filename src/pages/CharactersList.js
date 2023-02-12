import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";
import "./CharactersList.css";

function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (loading) return "Loading...";

  if (error) return "something went wrong";

  return (
    <div className="CharactersList">
      {data.characters.results.map((character, index) => {
        console.log(character);
        return (
          <Link to={`/${character.id}`} key={index}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default CharactersList;
