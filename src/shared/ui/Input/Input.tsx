'use client';

import { InputHTMLAttributes } from 'react';
import cn from 'classnames';

import s from './Input.module.scss';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({
  label,
  error,
  disabled,
  className,
  ...props
}: IProps) => {
  return (
    <div className={s.wrapper}>
      {label && <label className={s.label}>{label}</label>}
      <input
        className={cn(s.input, className, {
          [s.inputError]: error,
          [s.inputDisabled]: disabled
        })}
        disabled={disabled}
        {...props}
      />
      {error && <span className={s.error}>{error}</span>}
    </div>
  );
};
