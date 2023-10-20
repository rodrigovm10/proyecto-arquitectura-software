export const DATOS_PRINCIPALES = [
  {
    id: 1,
    campo: 'Nombre Comercial',
    nombre: 'nombreComercial',
    type: 'text',
    placeholder: 'Google...',
    length: 100,
    helperText: 'Ingrese el nombre comercial de la empresa.',
    errorMessage: 'El nombre comercial es obligatorio.'
  },
  {
    id: 2,
    campo: 'Razón Social',
    nombre: 'razonSocial',
    type: 'text',
    placeholder: 'Google México S. de R.L de C.V',
    length: 100,
    helperText: 'Ingrese la razón social de la empresa.',
    errorMessage: 'La razón social es obligatoria.'
  },
  {
    id: 3,
    campo: 'Actividad',
    nombre: 'actividad',
    type: 'text',
    placeholder: 'Somos una empresa encargada de...',
    length: 500,
    helperText: 'Describa la actividad principal de la empresa.',
    errorMessage: 'La descripción de la actividad es obligatoria.'
  },
  {
    id: 4,
    campo: 'Teléfono',
    nombre: 'telefono',
    type: 'text',
    placeholder: '4681555248',
    length: 10,
    helperText: 'Ingrese un número de teléfono válido, sin espacios ni caracteres especiales.',
    errorMessage: 'El número de teléfono es obligatorio y debe tener 10 dígitos.'
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

export const DATOS_EMPRESA = [
  {
    id: 1,
    campo: 'Tipo Sucursal',
    nombre: 'tipoSucursal',
    datos: ['Tipo Sucursal', 'Matriz', 'Sucursal']
  },
  {
    id: 2,
    campo: 'Sector',
    nombre: 'sector',
    datos: ['Sector', '0', 'A', 'B']
  }
]
