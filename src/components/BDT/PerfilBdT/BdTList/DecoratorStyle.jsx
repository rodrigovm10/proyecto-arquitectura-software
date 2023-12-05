import { estilosTarjetas } from '../../../../constants/DecoratorCard';

// Decorador base
export const PerfilDecorator = ({ children, style }) => (
  <div style={style}>
    {children}
  </div>
);

// Decorador personalización 1
export const PersonalizacionDecorator = ({ children, color, font, styleId }) => {
  const cardStyle = estilosTarjetas.find(e => e.id === styleId) || estilosTarjetas[0];
  const baseStyle = {
    backgroundColor: color,
    fontFamily: font,
    // Agrega aquí más estilos base si son necesarios
  };

  return (
    <div className={cardStyle.className} style={baseStyle}>
      <div className={cardStyle.contentClassName}>
        {children}
      </div>
    </div>
  );
};


/*

export const CambioColorDecorator = ({ children, color }) => {
  const style = { backgroundColor: color };
  return <PerfilDecorator style={style}>{children}</PerfilDecorator>;
};

export const CambioTipografiaDecorator = ({ children, font }) => {
  const style = { fontFamily: font };
  return <PerfilDecorator style={style}>{children}</PerfilDecorator>;
};

export const CambioBorderDecorator = ({ children, border }) => {
  const style = { border: border };
  return <PerfilDecorator style={style}>{children}</PerfilDecorator>;
};

*/
// Decoradores concretos

// HOC para combinar los decoradores
export const CombinedDecorator = ({ children, color, font, styleId, style }) => {
  // Asegúrate de que todos los props necesarios estén incluidos
  return (
    <PerfilDecorator style={style}>
      <PersonalizacionDecorator color={color} font={font} styleId={styleId}>
        {children}
      </PersonalizacionDecorator>
    </PerfilDecorator>
  );
};



