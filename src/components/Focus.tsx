import { ElementRef, useRef } from 'react';

const Focus = () => {
  const inputRef = useRef<ElementRef<'input'>>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Set Focus</button>
    </>
  );
};

export default Focus;
