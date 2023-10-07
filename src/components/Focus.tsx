import { ElementRef, useRef } from 'react';
import TextInputWithRef from './TextInputWithRef';

const Focus = () => {
  const inputRef = useRef<ElementRef<'input'>>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <TextInputWithRef ref={inputRef} />
      <button onClick={handleClick}>Focus on input</button>
    </>
  );
};

export default Focus;
