import React from "react";
import MesaVerde from "./parks/MesaVerde";
import howManyParks from "./parks/howManyParks";
import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/RockyMountain";

function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}
howManyParks();
wildlife();
elevation();
export default ColoradoStateParks;
