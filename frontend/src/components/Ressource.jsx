function Ressource({ details }) {
  return (
    <div className="row-span-2 col-span-3 flex items-center justify-center ">
      <div className="rounded-[10px] p-5 bg-ressource-bg border-2 border-ressource-border h-60 w-60 flex flex-col justify-center items-center">
        <span className="text-4xl font-black mb-2">{details.nom}</span>
        <div>
          <span>Processus</span>
          <span className="ml-2 text-lg font-semibold">
            {details.nom_processus}
          </span>
        </div>
        <div>
          <span>Temps restant</span>
          <span className="ml-2 text-lg font-semibold">
            {details.temps_restant}s / {details.temps_exp_total}s
          </span>
        </div>
      </div>
    </div>
  );
}

export default Ressource;
