// src/App.jsx
import "./App.css";
import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://loremflickr.com/320/240?random=1",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://loremflickr.com/320/240?random=2",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://loremflickr.com/320/240?random=3",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://loremflickr.com/320/240?random=4",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://loremflickr.com/320/240?random=5",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://loremflickr.com/320/240?random=6",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://loremflickr.com/320/240?random=7",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://loremflickr.com/320/240?random=8",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://loremflickr.com/320/240?random=9",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://loremflickr.com/320/240?random=10",
    },
  ]);

  const handleAddFighter = (newFighter) => {
    {
      money < newFighter.price
        ? console.log("Not enough money")
        : (setTeam([...team, newFighter]), setMoney(money - newFighter.price)),
        setTotalStrength(newFighter.strength + totalStrength),
        setTotalAgility(newFighter.agility + totalAgility);
    }
  };
const handleRemoveFighter = (deletedZombieName) => {
  const removedFighter = team.find((fighter) => fighter.name === deletedZombieName);

  if (removedFighter) {
    const filteredFighterArr = team.filter((fighter) => fighter.name !== deletedZombieName);

    setTeam(filteredFighterArr); 
    setMoney(money + removedFighter.price);
    setTotalStrength(totalStrength - removedFighter.strength); 
    setTotalAgility(totalAgility - removedFighter.agility); 
  } else {
    console.log("Fighter not found");
  }
};

  return (
    <div>
      <h1>Zombie Fighters</h1>
      <h3>Money: ${money}</h3>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Agility: {totalAgility}</h3>
      <h3>Team</h3>

      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <div className="team">
          {team.map((fighter, index) => (
            <div
              key={index}
              style={{ border: "2px solid black", width: "40%" }}
            >
              <p>Name: {fighter.name}</p>
              <img
                src={fighter.img}
                alt={fighter.name}
                style={{ width: "100px", height: "100px" }}
              />
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(fighter.name)}> Delete {fighter.name}</button>

            </div>
          ))}
        </div>
      )}
<hr />
      <h3>Fighters</h3>
      {zombieFighters.map((zombieFighters) => (
        <>
          <ul>
            <li>
              <div className="container">
                <img src={zombieFighters.img} alt="" />
                <br />
                Name: {zombieFighters.name}
                <br />
                Price: ${zombieFighters.price}
                <br />
                Strength: {zombieFighters.strength}
                <br />
                Agility: {zombieFighters.agility}
                <br />
                
                  <button onClick={() => handleAddFighter(zombieFighters)}>
                    Add
                  </button>

              
              </div>
            </li>
          </ul>
        </>
      ))}
    </div>
  );
};

export default App;
