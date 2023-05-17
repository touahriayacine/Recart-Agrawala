import { useState } from "react";
import Processus from "./components/Processus";
import Ressource from "./components/Ressource";
import Messages from "./components/Messages";

function App() {
  const widthNbPortions = 5;
  const heightNbPortions = 6;
  const widthPortion = window.innerWidth / widthNbPortions;
  const heightPortion = window.innerHeight / heightNbPortions;
  const [processus, setProcessus] = useState([
    {
      nom: "P1",
      temps_attente: 5.0,
      temps_attente_restant: 3.0,
      temps_exp_ressource: 1.9,
    },
    {
      nom: "P2",
      temps_attente: 5.0,
      temps_attente_restant: 3.0,
      temps_exp_ressource: 1.9,
    },
    {
      nom: "P3",
      temps_attente: 5.0,
      temps_attente_restant: 3.0,
      temps_exp_ressource: 1.9,
    },
    {
      nom: "P4",
      temps_attente: 5.0,
      temps_attente_restant: 3.0,
      temps_exp_ressource: 1.9,
    },
    {
      nom: "P5",
      temps_attente: 5.0,
      temps_attente_restant: 3.0,
      temps_exp_ressource: 1.9,
    },
    {
      nom: "P6",
      temps_attente: 5.0,
      temps_attente_restant: 3.0,
      temps_exp_ressource: 1.9,
    },
    {
      nom: "P7",
      temps_attente: 5.0,
      temps_attente_restant: 3.0,
      temps_exp_ressource: 1.9,
    },
    {
      nom: "P8",
      temps_attente: 5.0,
      temps_attente_restant: 3.0,
      temps_exp_ressource: 1.9,
    },
    {
      nom: "P9",
      temps_attente: 5.0,
      temps_attente_restant: 3.0,
      temps_exp_ressource: 1.9,
    },
    {
      nom: "P10",
      temps_attente: 5.0,
      temps_attente_restant: 3.0,
      temps_exp_ressource: 1.9,
    },
  ]);
  const [ressource, setRessource] = useState({
    nom: "Ressource",
    nom_processus: "P1",
    temps_restant: 1.6,
    temps_exp_total: 3.0,
  });
  const [emetteurMessageOk, setEmetteurOk] = useState(["P1"]);
  const [emetteurMessageReq, setEmetteurReq] = useState([]);
  const [processusCanvasPositions, setPosition] = useState({
    P1: {
      top: heightPortion / 2,
      left: (widthNbPortions / 2) * widthPortion,
    },
    P2: {
      top: heightPortion * 1.5,
      left: 1.5 * widthPortion,
    },
  });
  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-[20px] h-full w-full">
      <div></div>
      <div></div>
      <Processus details={processus[0]} />
      <div></div>
      <div></div>

      <div></div>
      <Processus details={processus[1]} />
      <div></div>
      <Processus details={processus[2]} />
      <div></div>

      <Processus details={processus[3]} />
      <Ressource details={ressource} />
      <Processus details={processus[4]} />

      <Processus details={processus[5]} />
      <Processus details={processus[6]} />

      <div></div>
      <Processus details={processus[7]} />
      <div></div>
      <Processus details={processus[8]} />
      <div></div>

      <div></div>
      <div></div>
      <Processus details={processus[9]} />
      <div></div>
      <div></div>
      <Messages
        messages={emetteurMessageOk}
        positions={processusCanvasPositions}
      />
    </div>
  );
}

export default App;
