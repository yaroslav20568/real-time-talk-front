'use client';

import { InputHTMLAttributes, useState } from 'react';
import cn from 'classnames';

import { EyeIcon, EyeOffIcon } from '@/shared';
import { Button } from '@/shared/ui/Button';

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
  type,
  ...props
}: IProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={s.wrapper}>
      {label && <label className={s.label}>{label}</label>}
      <div className={s.inputWrapper}>
        <input
          className={cn(s.input, className, {
            [s.inputError]: error,
            [s.inputDisabled]: disabled,
            [s.inputWithButton]: isPassword
          })}
          disabled={disabled}
          type={inputType}
          {...props}
        />
        {isPassword && (
          <Button
            type="button"
            variant="icon"
            className={s.toggleButton}
            onClick={handleTogglePassword}
            disabled={disabled}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </Button>
        )}
      </div>
      {error && <span className={s.error}>{error}</span>}
    </div>
  );
};
