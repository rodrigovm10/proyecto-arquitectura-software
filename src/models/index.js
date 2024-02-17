// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BDT, Empresa, Vacante, Oportunidades, VersionVacante, Styles } = initSchema(schema);

export {
  BDT,
  Empresa,
  Vacante,
  Oportunidades,
  VersionVacante,
  Styles
};