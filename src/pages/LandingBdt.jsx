import { Header } from '../components/Header'
import { Footer } from '../landing/Footer'
import { InicioBdt } from '../components/BDT/inicioBdT/InicioBdt'
import NavegadorBDT from '../components/BDT/inicioBdT/NavegadorBDT'

export default function LandingEmpresa() {
  return (
    <>
      <Header nombreDelGrupo={'trabajador'} />
      {/* <NavegadorBDT /> */}
      <InicioBdt />
      <Footer />
    </>
  )
}
