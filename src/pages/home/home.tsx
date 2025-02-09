import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { trackEvent, trackPageView } from "../../../trackingService";

const Counter = ({ diff }) => (
  <div className="counter loading-text">
    {diff.months >= 1 ? (
      <>
        {diff.months} {diff.months === 1 ? "mês" : "meses"} e {diff.days}{" "}
        {diff.days === 1 ? "dia" : "dias"}
      </>
    ) : (
      <>
        {diff.days} {diff.days === 1 ? "dia" : "dias"}
      </>
    )}
  </div>
);

const Home = () => {
  const [diff, setDiff] = useState({ months: 0, days: 0 });
  const [mode, setMode] = useState("default");

  useEffect(() => {
    trackPageView("Home", window.location.pathname);
  }, []);

  const calculateDiff = () => {
    const now = new Date();
    let startDate = new Date(now.getFullYear(), 0, 13);
    if (now < startDate) startDate = new Date(now.getFullYear() - 1, 0, 13);
    let months =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());
    let days = now.getDate() - startDate.getDate();
    if (days < 0) {
      months--;
      const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days = now.getDate() + (previousMonth.getDate() - startDate.getDate());
    }
    return { months, days };
  };

  useEffect(() => {
    const updateDiff = () => setDiff(calculateDiff());
    updateDiff();
    const interval = setInterval(updateDiff, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderDefault = () => (
    <>
      <div className="cloudy-illustration">
        <img src="/nublado.png" alt="Clima nublado" />
      </div>
      <Counter diff={diff} />
      <p className="question">Deseja que o contador continue avançando?</p>
      <div className="buttons">
        <button
          className="btn btn-red"
          onClick={() => {
            trackEvent({
              action: "click",
              category: "Contador",
              label: "Não continuar",
              value: 0,
            });
            setMode("red");
          }}
        >
          👎🏼
        </button>
        <button
          className="btn btn-green"
          onClick={() => {
            trackEvent({
              action: "click",
              category: "Contador",
              label: "Continuar",
              value: 1,
            });
            setMode("green");
          }}
        >
          👍🏼
        </button>
      </div>
    </>
  );

  const renderGreen = () => (
    <>
      <div className="cloudy-illustration">
        <img src="/nublado.png" alt="Clima nublado" />
      </div>
      <Counter diff={diff} />
      <div className="back-container">
        <button
          className="btn btn-back"
          onClick={() => {
            trackEvent({
              action: "click",
              category: "Contador",
              label: "Voltar do modo verde",
              value: 1,
            });
            setMode("default");
          }}
        >
          👈🏼 voltar
        </button>
      </div>
    </>
  );

  const renderRed = () => (
    <>
      <div className="sun-gif">
        <img src="/sol.gif" alt="Sol gif" />
      </div>
      <div className="message">Me ajude a fazer esse contador parar 🧑🏼‍🚀</div>
      <div className="back-container">
        <button
          className="btn btn-back"
          onClick={() => {
            trackEvent({
              action: "click",
              category: "Contador",
              label: "Voltar do modo vermelho",
              value: 0,
            });
            setMode("default");
          }}
        >
          👈🏼 voltar
        </button>
      </div>
    </>
  );

  return (
    <div className="home">
      <header className="header">
        <nav>
          <ul className="nav">
            <li>
              <Link to="/aniversario" className="nav-link">
                Aniversário
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        {mode === "default" && renderDefault()}
        {mode === "green" && renderGreen()}
        {mode === "red" && renderRed()}
      </main>
    </div>
  );
};

export default Home;
