import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





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
  readonly Oportunidades?: (Styles | null)[] | null;
  readonly Styles?: (Styles | null)[] | null;
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
  readonly Oportunidades: AsyncCollection<Styles>;
  readonly Styles: AsyncCollection<Styles>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BDT = LazyLoading extends LazyLoadingDisabled ? EagerBDT : LazyBDT

export declare const BDT: (new (init: ModelInit<BDT>) => BDT) & {
  copyOf(source: BDT, mutator: (draft: MutableModel<BDT>) => MutableModel<BDT> | void): BDT;
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
  readonly municipio?: string | null;
  readonly codigoPostal?: number | null;
  readonly colonia?: string | null;
  readonly calle?: string | null;
  readonly actividad?: string | null;
  readonly sector?: string | null;
  readonly tipoSucursal?: string | null;
  readonly numero?: number | null;
  readonly Vacantes?: (VersionVacante | null)[] | null;
  readonly Oportunidades?: (VersionVacante | null)[] | null;
  readonly VersionVacantes?: (VersionVacante | null)[] | null;
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
  readonly municipio?: string | null;
  readonly codigoPostal?: number | null;
  readonly colonia?: string | null;
  readonly calle?: string | null;
  readonly actividad?: string | null;
  readonly sector?: string | null;
  readonly tipoSucursal?: string | null;
  readonly numero?: number | null;
  readonly Vacantes: AsyncCollection<VersionVacante>;
  readonly Oportunidades: AsyncCollection<VersionVacante>;
  readonly VersionVacantes: AsyncCollection<VersionVacante>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Empresa = LazyLoading extends LazyLoadingDisabled ? EagerEmpresa : LazyEmpresa

export declare const Empresa: (new (init: ModelInit<Empresa>) => Empresa) & {
  copyOf(source: Empresa, mutator: (draft: MutableModel<Empresa>) => MutableModel<Empresa> | void): Empresa;
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
  readonly salarioMin?: number | null;
  readonly salarioMax?: number | null;
  readonly idiomaConNivel?: (string | null)[] | null;
  readonly municipio?: string | null;
  readonly jornadaLaboral?: string | null;
  readonly periodoPago?: string | null;
  readonly empresaID: string;
  readonly Oportunidades?: (VersionVacante | null)[] | null;
  readonly VersionVacantes?: (VersionVacante | null)[] | null;
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
  readonly salarioMin?: number | null;
  readonly salarioMax?: number | null;
  readonly idiomaConNivel?: (string | null)[] | null;
  readonly municipio?: string | null;
  readonly jornadaLaboral?: string | null;
  readonly periodoPago?: string | null;
  readonly empresaID: string;
  readonly Oportunidades: AsyncCollection<VersionVacante>;
  readonly VersionVacantes: AsyncCollection<VersionVacante>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Vacante = LazyLoading extends LazyLoadingDisabled ? EagerVacante : LazyVacante

export declare const Vacante: (new (init: ModelInit<Vacante>) => Vacante) & {
  copyOf(source: Vacante, mutator: (draft: MutableModel<Vacante>) => MutableModel<Vacante> | void): Vacante;
}

type EagerOportunidades = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Oportunidades, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly descripcion?: string | null;
  readonly numeroPlazas?: number | null;
  readonly area?: string | null;
  readonly tipoContrato?: string | null;
  readonly modaiidad?: string | null;
  readonly diasLaborales?: string | null;
  readonly edadMax?: number | null;
  readonly edadMin?: number | null;
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
  readonly salarioMaximo?: number | null;
  readonly salarioMin?: number | null;
  readonly idiomaConNivel?: (string | null)[] | null;
  readonly municipio?: string | null;
  readonly jornadaLaboral?: string | null;
  readonly emailBDT?: string | null;
  readonly nombreBDT?: string | null;
  readonly periodoPago?: string | null;
  readonly apellidosBDT?: string | null;
  readonly imagenBDTUrl?: string | null;
  readonly pdfimagenUrl?: string | null;
  readonly escolaridadBDT?: string | null;
  readonly telefonoBDT?: string | null;
  readonly generoBDT?: string | null;
  readonly bdtID: string;
  readonly empresaID: string;
  readonly vacanteID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOportunidades = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Oportunidades, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly descripcion?: string | null;
  readonly numeroPlazas?: number | null;
  readonly area?: string | null;
  readonly tipoContrato?: string | null;
  readonly modaiidad?: string | null;
  readonly diasLaborales?: string | null;
  readonly edadMax?: number | null;
  readonly edadMin?: number | null;
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
  readonly salarioMaximo?: number | null;
  readonly salarioMin?: number | null;
  readonly idiomaConNivel?: (string | null)[] | null;
  readonly municipio?: string | null;
  readonly jornadaLaboral?: string | null;
  readonly emailBDT?: string | null;
  readonly nombreBDT?: string | null;
  readonly periodoPago?: string | null;
  readonly apellidosBDT?: string | null;
  readonly imagenBDTUrl?: string | null;
  readonly pdfimagenUrl?: string | null;
  readonly escolaridadBDT?: string | null;
  readonly telefonoBDT?: string | null;
  readonly generoBDT?: string | null;
  readonly bdtID: string;
  readonly empresaID: string;
  readonly vacanteID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Oportunidades = LazyLoading extends LazyLoadingDisabled ? EagerOportunidades : LazyOportunidades

export declare const Oportunidades: (new (init: ModelInit<Oportunidades>) => Oportunidades) & {
  copyOf(source: Oportunidades, mutator: (draft: MutableModel<Oportunidades>) => MutableModel<Oportunidades> | void): Oportunidades;
}

type EagerVersionVacante = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VersionVacante, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly informacionVacante?: (string | null)[] | null;
  readonly empresaID: string;
  readonly vacanteID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVersionVacante = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VersionVacante, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly informacionVacante?: (string | null)[] | null;
  readonly empresaID: string;
  readonly vacanteID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VersionVacante = LazyLoading extends LazyLoadingDisabled ? EagerVersionVacante : LazyVersionVacante

export declare const VersionVacante: (new (init: ModelInit<VersionVacante>) => VersionVacante) & {
  copyOf(source: VersionVacante, mutator: (draft: MutableModel<VersionVacante>) => MutableModel<VersionVacante> | void): VersionVacante;
}

type EagerStyles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Styles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cardSit?: string | null;
  readonly cardHab?: string | null;
  readonly cardInfo?: string | null;
  readonly bdtID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStyles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Styles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cardSit?: string | null;
  readonly cardHab?: string | null;
  readonly cardInfo?: string | null;
  readonly bdtID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Styles = LazyLoading extends LazyLoadingDisabled ? EagerStyles : LazyStyles

export declare const Styles: (new (init: ModelInit<Styles>) => Styles) & {
  copyOf(source: Styles, mutator: (draft: MutableModel<Styles>) => MutableModel<Styles> | void): Styles;
}