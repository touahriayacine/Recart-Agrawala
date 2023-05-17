function Processus({ details }) {
  return (
    <div
      className={
        details.nom == "P2"
          ? " flex justify-start items-start h-60"
          : details.nom == "P3"
          ? " flex justify-end items-start h-60 relative bottom-[10px]"
          : details.nom == "P5"
          ? " flex h-60 justify-center items-center relative bottom-[10px]"
          : details.nom == "P6"
          ? " flex h-60 justify-center items-center relative left-[10px]"
          : details.nom == "P7"
          ? " flex h-60 justify-center items-center relative right-[10px]"
          : details.nom == "P8"
          ? " flex justify-start items-end h-60 relative left-[10px]"
          : details.nom == "P9"
          ? " flex justify-end items-end h-60 relative right-[20px]"
          : details.nom == "P10"
          ? " flex justify-end items-end h-60 relative left-[10px]"
          : " flex justify-center items-center h-60"
      }
    >
      <div className="bg-processus-bg border-2 border-processus-border h-60 w-60 p-[5px] rounded-full flex flex-col justify-center items-center">
        <span className="text-3xl font-black mb-2">{details.nom}</span>
        <div>
          <span>Temps d'attente</span>
          <span className="ml-2 font-semibold text-lg">
            {details.temps_attente_restant}s / {details.temps_attente}s
          </span>
        </div>
        <div>
          <span>Temps dans la RC</span>
          <span className="ml-2 font-semibold text-lg">
            {details.temps_exp_ressource}s
          </span>
        </div>
      </div>
    </div>
  );
}

export default Processus;
