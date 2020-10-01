import withCSSModule from 'react-css-modules';

/** CSS module type declaration.  */
export type CSSModuleClassnames = {
  readonly [key: string]: string;
};

/** Partial application for CSS module HOC accepting the module itself. */
const withCSSModulePartiallyApplied = (styles: CSSModuleClassnames) => {
  return (Component: React.Component<any>) => withCSSModule(Component, styles);
};

export default withCSSModulePartiallyApplied;
