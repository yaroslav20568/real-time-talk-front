'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import {
  RegisterFormData,
  registerFormSchema
} from '@/features/auth/validation/registerForm.schema';

import s from './RegisterForm.module.scss';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerFormSchema),
    mode: 'all'
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <form className={s.registerForm} onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label="Name"
        {...register('name')}
        error={errors.name?.message}
      />
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
      <Input
        type="password"
        label="Confirm Password"
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
      />
      <Button type="submit" variant="filled">
        Sign Up
      </Button>
    </form>
  );
};
