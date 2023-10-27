import { Header } from "../components/Header";
import { Footer } from "../landing/Footer";
import { InicioEmpresa } from "../components/Empresa/InicioEmpresa";

export function LandingEmpresa() {
  return (
    <>
      <Header nombreDelGrupo={"Empresa"} />
      <InicioEmpresa />
      <Footer />
    </>
  );
}
