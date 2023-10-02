// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Oportunidades, Vacante, Empresa, BDT } = initSchema(schema);

export {
  Oportunidades,
  Vacante,
  Empresa,
  BDT
};