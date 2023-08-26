import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const url = "https://mmo-games.p.rapidapi.com/games";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d167c5a2fdmsh6b06bf3e18a35a5p15b149jsn0716a7525de8",
      "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    },
  };

  const [juego, setjuego] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    try {
      fetch(url, options)
        .then((response) => response.json())
        .then((juego) => {
          setjuego(juego);
          setLoading(false);
          console.log(juego);
        });
    } catch (error) {
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <div> Loading...</div>;
  }

  return (
    <>
      <main>
        <div> Esto es un Web de MMO </div>
        <div> {juego[0].title} </div>
      </main>
    </>
  );
}

export default App;
