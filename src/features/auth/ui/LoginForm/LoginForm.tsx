'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import {
  LoginFormData,
  loginFormSchema
} from '@/features/auth/validation/loginForm.schema';

import s from './LoginForm.module.scss';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginFormSchema),
    mode: 'all'
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <form className={s.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        label="Email"
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        type="password"
        label="Password"
        {...register('password')}
        error={errors.password?.message}
      />
      <Button type="submit" variant="filled">
        Sign In
      </Button>
    </form>
  );
};
