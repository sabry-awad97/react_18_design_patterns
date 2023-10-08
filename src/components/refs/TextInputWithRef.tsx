import React from 'react';

interface Props {}

const TextInputWithRef = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    return <input ref={ref} type="text" {...props} />;
  }
);

export default TextInputWithRef;
