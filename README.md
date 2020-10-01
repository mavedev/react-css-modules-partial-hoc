# React CSS modules: Partially applied styles HOC
In case you need to get a higher order component with styles already provided, you can do it that way:
```tsx
import styles from './styles/Component.module.css';
import withStyles from 'react-css-modules-psh';

type OwnProps = { /* props. */ };

const Component: React.FC<OwnProps> = () => (
  <div styleName='Component' />
);

const withStylesApplied = withStyles(styles);
export default withStylesApplied;
```
You also can pass the result of the function to Redux compose fucntion:
```typescript
export default compose<React.Component<OwnProps>>(
  // ...,
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Component);
```
That only works for functional components.
