import { useState, ReactElement, ComponentType } from 'react';
import useEventListener from '../hooks/useEventListener';

interface WithInnerWidthProps {
  innerWidth: number;
}

const withInnerWidth =
  <P extends object>(Component: ComponentType<P & WithInnerWidthProps>) =>
  (props: P): ReactElement => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    useEventListener('resize', handleResize);

    return <Component {...props} innerWidth={innerWidth} />;
  };

export default withInnerWidth;
