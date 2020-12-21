import React, { HTMLAttributes } from 'react';
import { classNames } from '@website/tools';
import css from './index.module.scss';

export interface BoxProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
  fullScreen?: boolean;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((
  {
    className,
    fullScreen,
    ...restOfProps
  },
  ref
) => (
  <div
    ref={ref}
    className={classNames(
      className,
      {
        [css.fullScreen]: !!fullScreen,
      }
    )}
    {...restOfProps}
  />
));