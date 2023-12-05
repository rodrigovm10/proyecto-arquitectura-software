// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Styles, VersionVacante, Oportunidades, Vacante, Empresa, BDT } = initSchema(schema);

export {
  Styles,
  VersionVacante,
  Oportunidades,
  Vacante,
  Empresa,
  BDT
};