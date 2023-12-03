// Decorador base
export const PerfilDecorator = ({ children, style }) => (
  <div style={style}>
    {children}
  </div>
);

// Decoradores concretos

export const CambioColorDecorator = ({ children, color }) => {
  const style = { backgroundColor: color };
  return <PerfilDecorator style={style}>{children}</PerfilDecorator>;
};

export const CambioTipografiaDecorator = ({ children, font }) => {
  const style = { fontFamily: font };
  return <PerfilDecorator style={style}>{children}</PerfilDecorator>;
};
