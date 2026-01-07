'use client';

import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

type TButtonVariant = 'underline' | 'filled' | 'icon';

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
          [s.underline]: variant === 'underline',
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
