export const DATOS_PRINCIPALES = [
  {
    id: 1,
    campo: 'Nombre Vacante',
    nombre: 'nombre',
    type: 'text',
    placeholder: 'Desarrollador web...',
    length: 100,
    helperText: 'Ingrese el nombre comercial de la empresa.',
    errorMessage: 'El nombre comercial es obligatorio.'
  },
  {
    id: 2,
    campo: 'Descripción',
    nombre: 'descripcion',
    type: 'text',
    placeholder: 'Estamos en busca de un Desarrollador web senior...',
    length: 100,
    helperText: 'Ingrese el nombre comercial de la empresa.',
    errorMessage: 'El nombre comercial es obligatorio.'
  },
  {
    id: 3,
    campo: 'Número de plazas',
    nombre: 'numeroPlazas',
    type: 'text',
    placeholder: '10',
    length: 100,
    helperText: 'Ingrese el número de plazas disponibles para esta vacante.',
    errorMessage: 'El número de plazas es obligatorio.'
  }
]

export const DATOS_REQUISITOS = [
  {
    id: 1,
    campo: 'Edad Mínima',
    nombre: 'edadMin',
    type: 'text',
    min: 18,
    max: 99,
    placeholder: '25-35 años...',
    length: 100,
    helperText: 'Ingrese los requisitos de edad para esta vacante.',
    errorMessage: 'Los requisitos de edad son obligatorios.'
  },
  {
    id: 2,
    campo: 'Edad Máxima',
    nombre: 'edadMax',
    type: 'text',
    min: 18,
    max: 99,
    placeholder: 'Indistinto...',
    length: 100,
    helperText: 'Ingrese los requisitos de género para esta vacante.',
    errorMessage: 'Los requisitos de género son obligatorios.'
  }
]

export const DATOS_SALARIO = [
  {
    id: 1,
    campo: 'Salario mínimo',
    nombre: 'salarioMin',
    type: 'text',
    min: 0,
    placeholder: '25-35 años...',
    length: 100,
    helperText: 'Ingrese los requisitos de edad para esta vacante.',
    errorMessage: 'Los requisitos de edad son obligatorios.'
  },
  {
    id: 2,
    campo: 'Salario máxmio',
    nombre: 'salarioMax',
    type: 'text',
    min: 0,
    placeholder: 'Indistinto...',
    length: 100,
    helperText: 'Ingrese los requisitos de género para esta vacante.',
    errorMessage: 'Los requisitos de género son obligatorios.'
  }
]

export const DATOS_UBICACION = [
  {
    id: 1,
    campo: 'Calle',
    nombre: 'calle',
    type: 'text',
    placeholder: 'Avenida General, Iturbide, Cruz Blanca...',
    errorMessage: 'El campo de la calle es obligatorio.'
  },
  {
    id: 2,
    campo: 'Colonia',
    nombre: 'colonia',
    type: 'text',
    placeholder: 'Montañita, Arboleda, La Banda...',
    errorMessage: 'El campo de la colonia es obligatorio.'
  },
  {
    id: 3,
    campo: 'Número Exterior / Interior',
    nombre: 'numero',
    type: 'text',
    placeholder: '10B Int. 4, 120...',
    errorMessage: 'El campo de número exterior/interior es obligatorio.'
  },
  {
    id: 4,
    campo: 'Código Postal',
    nombre: 'codigoPostal',
    type: 'text',
    placeholder: '37900',
    errorMessage: 'El campo de código postal es obligatorio.'
  }
]
