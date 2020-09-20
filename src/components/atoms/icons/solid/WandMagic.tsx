import * as React from 'react';

function SvgWandMagic(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.34 0 80l53.34 26.67L80 160zm144-64l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zm234.66 245.33L432 288l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67zM400 192c8.84 0 16-7.16 16-16v-27.96l91.87-101.83c5.72-6.32 5.48-16.02-.55-22.05L487.84 4.69c-6.03-6.03-15.73-6.27-22.05-.55L186.6 256H144c-8.84 0-16 7.16-16 16v36.87L10.53 414.84c-13.57 12.28-14.1 33.42-1.16 46.36l41.43 41.43c12.94 12.94 34.08 12.41 46.36-1.16L376.34 192H400z" />
    </svg>
  );
}

export default SvgWandMagic;