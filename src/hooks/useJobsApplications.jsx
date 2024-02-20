import { DataStore, SortDirection } from "aws-amplify";
import { BDT, Oportunidades } from "../models";
import { useSession } from "./useSession";
import { useState } from "react";

export function useJobsApplications() {
  const { dataSession } = useSession();
  const [oportunidades, setOportunidades] = useState();

  const saveOportunidadesOnDataStore = async ({ vacante }) => {
    const bdt = await getBDT({ emailBDT: dataSession.email });
    const {
      nombre,
      descripcion,
      numeroPlazas,
      area,
      tipoContrato,
      modalidad,
      diasLaborales,
      edadMin,
      edadMax,
      genero,
      experienciaLaboral,
      escolaridad,
      idiomaConNivel,
      prestaciones,
      habilidadesBlandas,
      habilidadesTecnicas,
      salarioMin,
      salarioMax,
      municipio,
      periodoPago,
      jornadaLaboral,
      emailEmpresa,
      visible,
      ubicacion,
      id,
      empresaID,
      nombreEmpresa,
    } = vacante;
    const oportunidad = new Oportunidades({
      nombre,
      descripcion,
      numeroPlazas,
      area,
      tipoContrato,
      modalidad,
      diasLaborales,
      edadMax,
      edadMin,
      genero,
      experienciaLaboral,
      escolaridad,
      idioma: idiomaConNivel,
      nivelIdioma: idiomaConNivel,
      prestaciones,
      periodoPago,
      habilidadesBlandas,
      habilidadesTecnicas,
      visible,
      ubicacion,
      nombreEmpresa,
      salarioMaximo: salarioMax,
      salarioMin,
      idiomaConNivel,
      municipio,
      jornadaLaboral,
      emailEmpresa,
      emailBDT: dataSession.email,
      nombreBDT: bdt.nombre,
      bdtID: bdt.id,
      vacanteID: id,
      empresaID,
      apellidosBDT: bdt.apellidos,
      telefonoBDT: parseInt(bdt.telefono),
      generoBDT: bdt.genero,
      escolaridadBDT: bdt.escolaridad,
      pdfImagenUrl: bdt?.pdfImagenUrl || "",
      imagenBDTUrl: bdt?.imagenBDTUrl || "",
    });
    try {
      await DataStore.save(oportunidad);
    } catch (err) {
      throw new Error("Error al guardar la oportunidad", err);
    }
  };

  async function getBDT({ emailBDT }) {
    const newBDT = await DataStore.query(BDT, (c) => c.correo.eq(emailBDT));
    return newBDT[0];
  }

  async function listOportunidadesBDT({ emailBDT }) {
    try {
      const newOportunidades = await DataStore.query(
        Oportunidades,
        (c) => c.emailBDT.eq(emailBDT),
        {
          sort: (s) => s.createdAt(SortDirection.DESCENDING),
        }
      );
      setOportunidades(newOportunidades);
    } catch (error) {
      throw new Error("Error al listar las oportunidaes", error);
    }
  }

  async function listOportunidadesEmpresa({ emailEmpresa }) {
    try {
      const newOportunidades = await DataStore.query(
        Oportunidades,
        (c) => c.emailEmpresa.eq(emailEmpresa),
        {
          sort: (s) => s.createdAt(SortDirection.DESCENDING),
        }
      );
      console.log(newOportunidades);
      setOportunidades(newOportunidades);
    } catch (error) {
      throw new Error("Error al listar las oportunidaes", error);
    }
  }

  return {
    saveOportunidadesOnDataStore,
    listOportunidadesBDT,
    listOportunidadesEmpresa,
    oportunidades,
    getBDT,
  };
}
