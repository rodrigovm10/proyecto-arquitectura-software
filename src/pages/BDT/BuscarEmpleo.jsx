import NavegadorBDT from "../../components/BDT/inicioBdT/NavegadorBDT";
import { Footer } from "../../landing/Footer";
import { VacantesBDT } from "../../components/Vacantes/VacantesBDT";

export function BuscarEmpleo() {
  return (
    <>
      <NavegadorBDT />
      <VacantesBDT />
      <Footer />
    </>
  );
}
