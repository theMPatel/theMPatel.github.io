import React from 'react';

export interface BoxProps {
  className?: string;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((
  {
    className,
    ...restOfProps
  },
  ref
) => (
  <div
    ref={ref}
    className={className}
    {...restOfProps}
  />
));