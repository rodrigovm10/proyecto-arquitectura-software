import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerOportunidades = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Oportunidades, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly motivoBDT?: string | null;
  readonly motivoEmpresa?: string | null;
  readonly status?: string | null;
  readonly mensaje?: string | null;
  readonly vacanteID?: string | null;
  readonly empresaID?: string | null;
  readonly statusVisible?: string | null;
  readonly fechEntrevista?: string | null;
  readonly direccionEmpresaEntrevista?: string | null;
  readonly horarioEntrevista?: string | null;
  readonly ocumentacionEntrevistad?: string | null;
  readonly municipio?: string | null;
  readonly colonia?: string | null;
  readonly calle?: string | null;
  readonly numero?: string | null;
  readonly codigoPostal?: string | null;
  readonly idstep?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOportunidades = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Oportunidades, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly motivoBDT?: string | null;
  readonly motivoEmpresa?: string | null;
  readonly status?: string | null;
  readonly mensaje?: string | null;
  readonly vacanteID?: string | null;
  readonly empresaID?: string | null;
  readonly statusVisible?: string | null;
  readonly fechEntrevista?: string | null;
  readonly direccionEmpresaEntrevista?: string | null;
  readonly horarioEntrevista?: string | null;
  readonly ocumentacionEntrevistad?: string | null;
  readonly municipio?: string | null;
  readonly colonia?: string | null;
  readonly calle?: string | null;
  readonly numero?: string | null;
  readonly codigoPostal?: string | null;
  readonly idstep?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Oportunidades = LazyLoading extends LazyLoadingDisabled ? EagerOportunidades : LazyOportunidades

export declare const Oportunidades: (new (init: ModelInit<Oportunidades>) => Oportunidades) & {
  copyOf(source: Oportunidades, mutator: (draft: MutableModel<Oportunidades>) => MutableModel<Oportunidades> | void): Oportunidades;
}

type EagerVacante = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vacante, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreVacante?: string | null;
  readonly descripcion?: string | null;
  readonly numeroPlazas?: string | null;
  readonly diasLaborales?: string | null;
  readonly salario?: string | null;
  readonly habilidadesBlandas?: string | null;
  readonly habilidadesTecnicas?: string | null;
  readonly generoBDT?: string | null;
  readonly edadMin?: string | null;
  readonly edadMax?: string | null;
  readonly discapacidadAcept?: (string | null)[] | null;
  readonly area?: string | null;
  readonly tipoEmpleo?: string | null;
  readonly causaVacante?: string | null;
  readonly dispViajar?: boolean | null;
  readonly dispRadicar?: boolean | null;
  readonly nivelPuesto?: string | null;
  readonly experiencia?: string | null;
  readonly escolaridad?: string | null;
  readonly vigenciaVacante?: string | null;
  readonly prestaciones?: string | null;
  readonly direccionEmpresa?: boolean | null;
  readonly municipio?: string | null;
  readonly colonia?: string | null;
  readonly calle?: string | null;
  readonly codigoPostal?: string | null;
  readonly numero?: string | null;
  readonly idioma?: string | null;
  readonly statusVisible?: boolean | null;
  readonly tipoCotrato?: string | null;
  readonly modalidad?: string | null;
  readonly tipoLicencia?: string | null;
  readonly contratoDirecto?: string | null;
  readonly salarioMax?: string | null;
  readonly salarioMin?: string | null;
  readonly periodoPago?: string | null;
  readonly tipoSueldo?: string | null;
  readonly correoContactoDirecto?: string | null;
  readonly telefonoContactoDirecto?: string | null;
  readonly horarioLaboral?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVacante = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vacante, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreVacante?: string | null;
  readonly descripcion?: string | null;
  readonly numeroPlazas?: string | null;
  readonly diasLaborales?: string | null;
  readonly salario?: string | null;
  readonly habilidadesBlandas?: string | null;
  readonly habilidadesTecnicas?: string | null;
  readonly generoBDT?: string | null;
  readonly edadMin?: string | null;
  readonly edadMax?: string | null;
  readonly discapacidadAcept?: (string | null)[] | null;
  readonly area?: string | null;
  readonly tipoEmpleo?: string | null;
  readonly causaVacante?: string | null;
  readonly dispViajar?: boolean | null;
  readonly dispRadicar?: boolean | null;
  readonly nivelPuesto?: string | null;
  readonly experiencia?: string | null;
  readonly escolaridad?: string | null;
  readonly vigenciaVacante?: string | null;
  readonly prestaciones?: string | null;
  readonly direccionEmpresa?: boolean | null;
  readonly municipio?: string | null;
  readonly colonia?: string | null;
  readonly calle?: string | null;
  readonly codigoPostal?: string | null;
  readonly numero?: string | null;
  readonly idioma?: string | null;
  readonly statusVisible?: boolean | null;
  readonly tipoCotrato?: string | null;
  readonly modalidad?: string | null;
  readonly tipoLicencia?: string | null;
  readonly contratoDirecto?: string | null;
  readonly salarioMax?: string | null;
  readonly salarioMin?: string | null;
  readonly periodoPago?: string | null;
  readonly tipoSueldo?: string | null;
  readonly correoContactoDirecto?: string | null;
  readonly telefonoContactoDirecto?: string | null;
  readonly horarioLaboral?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Vacante = LazyLoading extends LazyLoadingDisabled ? EagerVacante : LazyVacante

export declare const Vacante: (new (init: ModelInit<Vacante>) => Vacante) & {
  copyOf(source: Vacante, mutator: (draft: MutableModel<Vacante>) => MutableModel<Vacante> | void): Vacante;
}

type EagerEmpresa = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Empresa, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreComercial?: string | null;
  readonly razonSocial?: string | null;
  readonly rfc?: string | null;
  readonly email?: string | null;
  readonly telefono?: string | null;
  readonly tamanoEmpresa?: string | null;
  readonly municipio?: string | null;
  readonly codigoPostal?: string | null;
  readonly colonia?: string | null;
  readonly calle?: string | null;
  readonly actividad?: string | null;
  readonly sector?: string | null;
  readonly tipoSucursal?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmpresa = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Empresa, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreComercial?: string | null;
  readonly razonSocial?: string | null;
  readonly rfc?: string | null;
  readonly email?: string | null;
  readonly telefono?: string | null;
  readonly tamanoEmpresa?: string | null;
  readonly municipio?: string | null;
  readonly codigoPostal?: string | null;
  readonly colonia?: string | null;
  readonly calle?: string | null;
  readonly actividad?: string | null;
  readonly sector?: string | null;
  readonly tipoSucursal?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Empresa = LazyLoading extends LazyLoadingDisabled ? EagerEmpresa : LazyEmpresa

export declare const Empresa: (new (init: ModelInit<Empresa>) => Empresa) & {
  copyOf(source: Empresa, mutator: (draft: MutableModel<Empresa>) => MutableModel<Empresa> | void): Empresa;
}

type EagerBDT = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BDT, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly apellidos?: string | null;
  readonly curp?: string | null;
  readonly fechaNacimiento?: string | null;
  readonly telefono?: string | null;
  readonly escolaridad?: string | null;
  readonly genero?: string | null;
  readonly idioma?: (string | null)[] | null;
  readonly buscaEmpleo?: boolean | null;
  readonly trabajando?: boolean | null;
  readonly correo?: string | null;
  readonly habilidadesBlandas?: (string | null)[] | null;
  readonly habilidadesTecnicas?: string | null;
  readonly dispViajar?: boolean | null;
  readonly dispRadicar?: boolean | null;
  readonly municipio?: string | null;
  readonly colonia?: string | null;
  readonly calle?: string | null;
  readonly codigoPostal?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBDT = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BDT, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly apellidos?: string | null;
  readonly curp?: string | null;
  readonly fechaNacimiento?: string | null;
  readonly telefono?: string | null;
  readonly escolaridad?: string | null;
  readonly genero?: string | null;
  readonly idioma?: (string | null)[] | null;
  readonly buscaEmpleo?: boolean | null;
  readonly trabajando?: boolean | null;
  readonly correo?: string | null;
  readonly habilidadesBlandas?: (string | null)[] | null;
  readonly habilidadesTecnicas?: string | null;
  readonly dispViajar?: boolean | null;
  readonly dispRadicar?: boolean | null;
  readonly municipio?: string | null;
  readonly colonia?: string | null;
  readonly calle?: string | null;
  readonly codigoPostal?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BDT = LazyLoading extends LazyLoadingDisabled ? EagerBDT : LazyBDT

export declare const BDT: (new (init: ModelInit<BDT>) => BDT) & {
  copyOf(source: BDT, mutator: (draft: MutableModel<BDT>) => MutableModel<BDT> | void): BDT;
}