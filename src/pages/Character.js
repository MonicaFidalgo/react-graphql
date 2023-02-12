import React from "react";
import { useCharacter } from "../hooks/useCharacter";

import { useParams } from "react-router-dom";

export default function Character() {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);

  console.log({
    error,
    loading,
    data,
  });

  if (error) return <div>something went wrong</div>;

  if (loading) return <div>spinner</div>;

  return (
    <div className="Character">
      <img src={data.character.image} alt={data.character.name} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <ul className="Character-episode">
          {data.character.episode.map((episode, index) => {
            return (
              <li key={index}>
                {episode.name} - <b>{episode.episode}</b>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
