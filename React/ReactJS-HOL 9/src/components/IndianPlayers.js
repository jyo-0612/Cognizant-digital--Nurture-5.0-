import React from 'react';

function IndianPlayers() {

  const oddTeam = [
    "Virat",
    "Rahul",
    "Pant",
    "Ashwin",
    "Siraj"
  ];

  const evenTeam = [
    "Rohit",
    "Gill",
    "Hardik",
    "Jadeja",
    "Shami"
  ];

  const T20players = ["Surya", "Tilak", "Rinku"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Iyer"];

  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h1>Odd Team Players</h1>

      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <hr />

      <h1>Even Team Players</h1>

      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <hr />

      <h1>Merged Players</h1>

      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;