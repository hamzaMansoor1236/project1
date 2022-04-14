import "./App.css";

function App() {
  const pets = [
    {
      name: "Dolly",
      type: "Cat",
      description: "Dolly is funny and loves to eat meat",
      skills: ["fetch", "snatch", "bite", "hunt"],
      photo: "http://placekitten.com/200/300",
    },
    {
      name: "Nancy",
      type: "Cat",
      description: "Nancy is furry and loves to sleep",
      skills: ["lazy", "cuddle", "soft", "hunt"],
      photo: "http://placekitten.com/200/300",
    },
    {
      name: "Nancy",
      type: "Cat",
      description: "Nancy is furry and loves to sleep",
      skills: ["lazy", "cuddle", "soft", "hunt"],
      photo: "http://placekitten.com/200/300",
    },
    {
      name: "Nancy",
      type: "Cat",
      description: "Nancy is furry and loves to sleep",
      skills: ["lazy", "cuddle", "soft", "hunt"],
      photo: "http://placekitten.com/200/300",
    },
    {
      name: "Nancy",
      type: "Cat",
      description: "Nancy is furry and loves to sleep",
      skills: ["lazy", "cuddle", "soft", "hunt"],
      photo: "http://placekitten.com/200/300",
    },
    {
      name: "Nancy",
      type: "Cat",
      description: "Nancy is furry and loves to sleep",
      skills: ["lazy", "cuddle", "soft", "hunt"],
      photo: "http://placekitten.com/200/300",
    }
  ];
  return (
    <div className="app">
      <h1>List of my pets</h1>
      <ul className="container">
        {pets.map((pets, index) => (
          <li className="li" key={index}>
            <h2>{pets.name}</h2>
            <h3>{pets.description}</h3>
            <img src={pets.photo} alt="cat" width="200px" height="200px"></img>
            <ul className="skills">
              {pets.skills.map((skills) => (
                <li className="li" key={skills}>{skills}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
