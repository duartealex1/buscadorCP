import React, { useState } from "react";
import "./App.css";
import api from "./services/Api";
//icons react icons
//import { FiSearch } from "react-icons/fi";

function App() {
  const [input, setInput] = useState("2495300");
  const [cep, setCep] = useState("");

  async function search() {
    //alert('oi')
    if (input === "") {
      alert("Por Favor, Preencha um código postal Válido!");
      return;
    }

    try {
      const response = await api.get(`${input}?json`);
      //response.data >>> CP, CP4, CP3, Concelho, Designação Postal, Distrito, Localidade,
      setCep(response.data);
      setInput("");
      console.log(response.data);
    } catch {
      alert("Ops. Erro ao buscar, tente outro Código postal");
      //setInput("");
    }
  }

  return (
    <div className="container align-middle ">
      <h1 className=" fw-bold text-decoration-underline text-center">
        Buscador
      </h1>
      <span className="col-10 form-text d-flex mb-3 flip">
        <label for="cp" className="form-label"></label>
        <input
          className="form-control"
          id="cp"
          type="number"
          placeholder="código postal"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>

        <button className="btn btn-primary scale" onClick={search}>
        <i class="bi bi-search"></i>
        </button>
      </span>
      {Object.keys(cep).length > 0 && (
        <main className="">
        <h2 className="fw-bold form-text text-uppercase">
          Localidade: {cep.Localidade}
        </h2>
        <div className="form-text">Distrito: {cep.Distrito}</div>
        <div className="form-text">Concelho: {cep.Concelho}</div>
        <div className="form-text">Código Postal: {cep.CP}</div>
      </main>
      )}
      
    </div>
  );
}

export default App;
