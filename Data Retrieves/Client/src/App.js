import "./App.css";
import { useState } from "react";

function App() {
  let [display, setDisplay] = useState([]);
  let [dataType, setDataType] = useState("");

  let getData = async () => {
    let reqOption = {
      method: "GET",
    };

    let dataStore = await fetch("http://localhost:9441/players", reqOption);

    let dataConvert = await dataStore.json();

    setDisplay(dataConvert);
    setDataType("players");
    console.log(dataConvert);
  };

  let getMovieData = async () => {
    let reqOption2 = {
      method: "GET",
    };

    let movieDataStore = await fetch("http://localhost:9441/movies", reqOption2);

    let movieDataConvert = await movieDataStore.json();

    setDisplay(movieDataConvert);
    setDataType("movies");
    console.log(movieDataConvert);
  };


  return (
    <div className="App">
      <button
        onClick={() => {
          getData();
        }}
      >
        Get Data
      </button>

      <button
        onClick={() => {
          getMovieData();
        }}
      >
        Get Movie Data
      </button>

      {dataType === "players" && display.map((ele, i) => {
        return (
          <div key={i} className="movieCast">
            <h1>Cricket Players Data</h1>
            <h2>Name:{ele.playerName}</h2>
            <h2>Age:{ele.age}</h2>
            <h2>Mail id:{ele.email}</h2>
            <h2>Team:{ele.teamName}</h2>
          </div>
        );
      })}

{dataType === "movies" && display.map((ele, i) => {
        return (
         
          <div key={i} className="movieCast">
            <h1>Movie Data</h1>
          <h2>Movie : {ele.movieName}</h2>
          <h2>Hero  : {ele.heroName}</h2>
          <h2>Heroine: {ele.heroineName}</h2>
          <h2>Villian: {ele.villainName}</h2>
          <h2>Director  : {ele.directorName}</h2>
        </div>
        );
      })}
    </div>
  );
}

export default App;
