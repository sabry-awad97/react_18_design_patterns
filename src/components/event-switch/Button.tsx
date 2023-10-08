import { FC, MouseEventHandler, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Button: FC<Props> = ({ children }) => {
  const handleEvent: MouseEventHandler<HTMLButtonElement> = e => {
    switch (e.type) {
      case 'click':
        console.log('clicked');
        break;

      case 'dblclick':
        console.log('double clicked');
        break;

      default:
        console.warn(`No case for event type "${e.type}"`);
    }
  };

  return (
    <button onClick={handleEvent} onDoubleClick={handleEvent}>
      {children}
    </button>
  );
};

export default Button;
