import React from "react";

const MusicaPersonalizada = () => (
  <section style={{ textAlign: "center", padding: "20px" }}>
    <h2>Música Especial</h2>
    <audio controls style={{ marginTop: "10px" }}>
      <source src="/musica_especial.mp3" type="audio/mpeg" />
      Seu navegador não suporta áudio.
    </audio>
  </section>
);

export default MusicaPersonalizada;
