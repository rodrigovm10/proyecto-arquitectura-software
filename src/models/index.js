// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { VersionVacante, Oportunidades, Vacante, Empresa, BDT } = initSchema(schema);

export {
  VersionVacante,
  Oportunidades,
  Vacante,
  Empresa,
  BDT
};