import { FC, ReactNode } from 'react';

interface Props {
  children: () => ReactNode;
}

const FunctionAsChild: FC<Props> = ({ children }) => children();

export default FunctionAsChild;
