import { FC } from 'react';
import Circle from './Circle';

type Props = {
  x: number;
  y: number;
  radius: number;
};

const RedCircle: FC<Props> = ({ x, y, radius }) => {
  return <Circle x={x} y={y} radius={radius} fill="red" />;
};

export default RedCircle;
