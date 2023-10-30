import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





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
  readonly correoEmpresa?: string | null;
  readonly correoBDT?: string | null;
  readonly nombreBDT?: string | null;
  readonly nombreEmpresa?: string | null;
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
  readonly correoEmpresa?: string | null;
  readonly correoBDT?: string | null;
  readonly nombreBDT?: string | null;
  readonly nombreEmpresa?: string | null;
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
  readonly nombre?: string | null;
  readonly descripcion?: string | null;
  readonly numeroPlazas?: number | null;
  readonly area?: string | null;
  readonly tipoContrato?: string | null;
  readonly modalidad?: string | null;
  readonly diasLaborales?: string | null;
  readonly edadMin?: number | null;
  readonly edadMax?: number | null;
  readonly genero?: string | null;
  readonly experienciaLaboral?: string | null;
  readonly escolaridad?: string | null;
  readonly idioma?: (string | null)[] | null;
  readonly nivelIdioma?: (string | null)[] | null;
  readonly prestaciones?: (string | null)[] | null;
  readonly habilidadesBlandas?: (string | null)[] | null;
  readonly habilidadesTecnicas?: (string | null)[] | null;
  readonly emailEmpresa?: string | null;
  readonly visible?: boolean | null;
  readonly ubicacion?: string | null;
  readonly nombreEmpresa?: string | null;
  readonly empresaID: string;
  readonly salarioMin?: number | null;
  readonly salarioMax?: number | null;
  readonly idiomaConNivel?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVacante = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vacante, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly descripcion?: string | null;
  readonly numeroPlazas?: number | null;
  readonly area?: string | null;
  readonly tipoContrato?: string | null;
  readonly modalidad?: string | null;
  readonly diasLaborales?: string | null;
  readonly edadMin?: number | null;
  readonly edadMax?: number | null;
  readonly genero?: string | null;
  readonly experienciaLaboral?: string | null;
  readonly escolaridad?: string | null;
  readonly idioma?: (string | null)[] | null;
  readonly nivelIdioma?: (string | null)[] | null;
  readonly prestaciones?: (string | null)[] | null;
  readonly habilidadesBlandas?: (string | null)[] | null;
  readonly habilidadesTecnicas?: (string | null)[] | null;
  readonly emailEmpresa?: string | null;
  readonly visible?: boolean | null;
  readonly ubicacion?: string | null;
  readonly nombreEmpresa?: string | null;
  readonly empresaID: string;
  readonly salarioMin?: number | null;
  readonly salarioMax?: number | null;
  readonly idiomaConNivel?: (string | null)[] | null;
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
  readonly telefono?: number | null;
  readonly municipio?: string | null;
  readonly codigoPostal?: number | null;
  readonly colonia?: string | null;
  readonly calle?: string | null;
  readonly actividad?: string | null;
  readonly sector?: string | null;
  readonly tipoSucursal?: string | null;
  readonly numero?: number | null;
  readonly Vacantes?: (Vacante | null)[] | null;
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
  readonly telefono?: number | null;
  readonly municipio?: string | null;
  readonly codigoPostal?: number | null;
  readonly colonia?: string | null;
  readonly calle?: string | null;
  readonly actividad?: string | null;
  readonly sector?: string | null;
  readonly tipoSucursal?: string | null;
  readonly numero?: number | null;
  readonly Vacantes: AsyncCollection<Vacante>;
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
  readonly telefono?: number | null;
  readonly escolaridad?: string | null;
  readonly genero?: string | null;
  readonly idioma?: (string | null)[] | null;
  readonly buscaEmpleo?: boolean | null;
  readonly trabajando?: boolean | null;
  readonly correo?: string | null;
  readonly habilidadesBlandas?: (string | null)[] | null;
  readonly habilidadesTecnicas?: (string | null)[] | null;
  readonly dispViajar?: boolean | null;
  readonly dispRadicar?: boolean | null;
  readonly municipio?: string | null;
  readonly colonia?: string | null;
  readonly calle?: string | null;
  readonly codigoPostal?: number | null;
  readonly imagenBDTUrl?: string | null;
  readonly pdfImagenUrl?: string | null;
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
  readonly telefono?: number | null;
  readonly escolaridad?: string | null;
  readonly genero?: string | null;
  readonly idioma?: (string | null)[] | null;
  readonly buscaEmpleo?: boolean | null;
  readonly trabajando?: boolean | null;
  readonly correo?: string | null;
  readonly habilidadesBlandas?: (string | null)[] | null;
  readonly habilidadesTecnicas?: (string | null)[] | null;
  readonly dispViajar?: boolean | null;
  readonly dispRadicar?: boolean | null;
  readonly municipio?: string | null;
  readonly colonia?: string | null;
  readonly calle?: string | null;
  readonly codigoPostal?: number | null;
  readonly imagenBDTUrl?: string | null;
  readonly pdfImagenUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BDT = LazyLoading extends LazyLoadingDisabled ? EagerBDT : LazyBDT

export declare const BDT: (new (init: ModelInit<BDT>) => BDT) & {
  copyOf(source: BDT, mutator: (draft: MutableModel<BDT>) => MutableModel<BDT> | void): BDT;
}