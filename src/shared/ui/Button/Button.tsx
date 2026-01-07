'use client';

import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

type TButtonVariant = 'tab' | 'filled' | 'icon';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariant;
}

export const Button: FC<IProps> = ({
  variant = 'filled',
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        s.button,
        {
          [s.tab]: variant === 'tab',
          [s.filled]: variant === 'filled',
          [s.icon]: variant === 'icon'
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
