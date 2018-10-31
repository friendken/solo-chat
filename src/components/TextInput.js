import React from 'react';

const TextInput = React.forwardRef((props, ref) => (
  <div className="textInput">
    <input ref={ref} {...props} />
  </div>
));

export default TextInput;
