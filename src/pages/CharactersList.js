import React from "react";
import {useCharacters} from "../hooks/useCharacters";

function CharactersList() {

	const {error, loading, data} = useCharacters()


  if (loading) return "Loading...";

  if (error) return "something went wrong";

  return (
    <div className="CharactersList">
      {data.characters.results.map((character) => {
        console.log(character);
        return (
          <div>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default CharactersList;
