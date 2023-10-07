import withInnerWidth from '../hocs/withInnerWidth';

const WithInnerWidth = withInnerWidth(({ innerWidth }) => (
  <div>innerWidth: {innerWidth}</div>
));

export default WithInnerWidth;
