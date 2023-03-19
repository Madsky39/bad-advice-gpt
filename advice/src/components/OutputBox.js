import React from 'react';

function OutputBox(props) {
  return (
    <div>
      <label htmlFor="text-output">Output:</label>
      <textarea
        id="text-output"
        value={props.outputValue}
        readOnly
      />
    </div>
  );
}

export default OutputBox;