import React from 'react';

const TextInput = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

export default TextInput;
