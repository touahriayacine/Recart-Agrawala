import { useState } from "react";
import Processus from "./components/Processus";
import Ressource from "./components/Ressource";
import Messages from "./components/Messages";

function App() {
  const widthNbPortions = 5;
  const heightNbPortions = 6;
  const ratio = window.devicePixelRatio;
  const widthPortion = window.innerWidth / ratio / widthNbPortions;
  const heightPortion = window.innerHeight / ratio / heightNbPortions;
  const ProcessusPositions = {
    P1: {
      top: heightPortion * 0.5,
      left: 2 * widthPortion,
    },
    P2: {
      top: heightPortion * 1.5,
      left: 1 * widthPortion,
    },
    P3: {
      top: heightPortion * 1.1,
      left: 3 * widthPortion,
    },
    P4: {
      top: heightPortion * 2.5,
      left: 0.4 * widthPortion,
    },
    P5: {
      top: heightPortion * 2.1,
      left: 3.6 * widthPortion,
    },
    P6: {
      top: heightPortion * 3.6,
      left: 0.6 * widthPortion,
    },
    P7: {
      top: heightPortion * 3.8,
      left: 3.4 * widthPortion,
    },
    P8: {
      top: heightPortion * 4.8,
      left: 1.2 * widthPortion,
    },
    P9: {
      top: heightPortion * 4.4,
      left: 2.8 * widthPortion,
    },
    P10: {
      top: heightPortion * 5.6,
      left: 2.2 * widthPortion,
    },
  };
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
  const [emetteurMessageOk, setEmetteurOk] = useState(["P2"]);
  const [emetteurMessageNon, setEmetteurNon] = useState(["P2"]);
  const [emetteurMessageReq, setEmetteurReq] = useState(["P1"]);
  const [OKProcessusPositions, setOkPosition] = useState({
    P2: {
      top: heightPortion * 1.5,
      left: 1 * widthPortion,
    },
    P3: {
      top: heightPortion * 1.1,
      left: 3 * widthPortion,
    },
    P7: {
      top: heightPortion * 3.8,
      left: 3.4 * widthPortion,
    },
    P10: {
      top: heightPortion * 5.6,
      left: 2.2 * widthPortion,
    },
  });
  const [NonProcessusPositions, setNonPosition] = useState({
    P1: {
      top: heightPortion * 0.5,
      left: 2 * widthPortion,
    },
    P4: {
      top: heightPortion * 2.5,
      left: 0.4 * widthPortion,
    },
    P5: {
      top: heightPortion * 2.1,
      left: 3.6 * widthPortion,
    },
    P6: {
      top: heightPortion * 3.6,
      left: 0.6 * widthPortion,
    },
    P8: {
      top: heightPortion * 4.8,
      left: 1.2 * widthPortion,
    },
    P9: {
      top: heightPortion * 4.4,
      left: 2.8 * widthPortion,
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
        positions={OKProcessusPositions}
        all_positions={ProcessusPositions}
        color={"#28871A"}
      />
      <Messages
        messages={emetteurMessageNon}
        positions={NonProcessusPositions}
        all_positions={ProcessusPositions}
        color={"#f35b04"}
      />
      {/*
      <Messages
        messages={emetteurMessageReq}
        positions={ProcessusPositions}
        all_positions={ProcessusPositions}
        color={"#ffb703"}
      /> */}
    </div>
  );
}

export default App;
