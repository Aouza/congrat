import React, { useState } from "react";

const Perdoar = () => {
  const [mensagemVisivel, setMensagemVisivel] = useState(false);

  return (
    <section style={{ textAlign: "center", padding: "20px" }}>
      <button
        onClick={() => setMensagemVisivel(true)}
        style={{
          backgroundColor: "#ffa726",
          padding: "10px",
          borderRadius: "5px",
          color: "white",
          cursor: "pointer",
        }}
      >
        💖 Clique para Perdoar
      </button>
      {mensagemVisivel && (
        <p style={{ marginTop: "10px", color: "#e65100" }}>
          Você está oficialmente perdoado e amado! 🥳
        </p>
      )}
    </section>
  );
};

export default Perdoar;
