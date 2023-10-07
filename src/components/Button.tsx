import { FC, MouseEventHandler, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Button: FC<Props> = ({ children }) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
    console.log(e instanceof MouseEvent); // false
    console.log(e.nativeEvent instanceof MouseEvent); // true
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
