import NavBar from "@components/Navbar";
import React, { useState, useEffect } from "react";

function Musiques() {
  const [musiques, setMusiques] = useState([]);

  const ids = new Array(10).fill().map(() => Math.ceil(Math.random() * 100));

  const getMusic = async () => {
    const musics = await Promise.all(
      ids
        .map(
          (id) =>
            `https://freesound.org/apiv2/sounds/${id}?token=fQYg04k31l02iuT4eugfH73BgNS77VFiXptFDyRz`
        )
        .map((url) => fetch(url).then((res) => res.json()))
    );
    setMusiques(musics);
  };

  useEffect(() => {
    getMusic();
  }, []);

  return (
    <div>
      <div>
        <h1>Welcome to our random Playlist Musique 🎶</h1>
      </div>
      {musiques.map((musique) => {
        return (
          <div>
            <h4>Produit par : {musique.username} </h4>
            <p>{musique.name}</p>
            <p>{musique.url} </p>
          </div>
        );
      })}
      <NavBar />
    </div>
  );
}

export default Musiques;
