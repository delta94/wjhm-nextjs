import * as React from 'react';

function SvgSquareFull(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M512 512H0V0h512v512z" />
    </svg>
  );
}

export default SvgSquareFull;
