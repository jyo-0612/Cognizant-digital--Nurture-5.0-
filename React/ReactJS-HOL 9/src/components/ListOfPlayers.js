import React from "react";

function ListOfPlayers() {

  const players = [
    { name: "Virat", score: 90 },
    { name: "Rohit", score: 45 },
    { name: "Gill", score: 88 },
    { name: "Rahul", score: 65 },
    { name: "Hardik", score: 74 },
    { name: "Pant", score: 55 },
    { name: "Jadeja", score: 82 },
    { name: "Ashwin", score: 48 },
    { name: "Shami", score: 72 },
    { name: "Siraj", score: 69 }
  ];

  return (
    <div style={{ margin: "20px" }}>
      <h1>List of Players</h1>

      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} {player.score}
          </li>
        ))}
      </ul>

      <hr />

      <h1>Players Scoring Below 70</h1>

      <ul>
        {players
          .filter(player => player.score < 70)
          .map((player, index) => (
            <li key={index}>
              {player.name} {player.score}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ListOfPlayers;