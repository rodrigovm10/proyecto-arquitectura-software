import { Header } from "../components/Header";
import { Footer } from "../landing/Footer";
import { InicioBdt } from "../components/BDT/inicioBdT/InicioBdt";

export default function LandingEmpresa() {
  return (
    <>
      <Header nombreDelGrupo={"trabajador"} />
      <InicioBdt />
      <Footer />
    </>
  );
}
