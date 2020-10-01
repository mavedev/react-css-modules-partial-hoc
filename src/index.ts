import withCSSModule from 'react-css-modules';

/** CSS module type declaration.  */
export type CSSModuleClassnames = {
  readonly [key: string]: string;
};

/** Partial application for CSS module HOC accepting the module itself. */
const withCSSModulePartiallyApplied = <Props>(styles: CSSModuleClassnames) => {
  return (Component: React.FC<Props>) => withCSSModule(Component, styles);
};

export default withCSSModulePartiallyApplied;
