// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



<<<<<<< HEAD
const { VersionVacante, Oportunidades, Vacante, Empresa, BDT } = initSchema(schema);

export {
=======
const { Styles, VersionVacante, Oportunidades, Vacante, Empresa, BDT } = initSchema(schema);

export {
  Styles,
>>>>>>> mariodos
  VersionVacante,
  Oportunidades,
  Vacante,
  Empresa,
  BDT
};