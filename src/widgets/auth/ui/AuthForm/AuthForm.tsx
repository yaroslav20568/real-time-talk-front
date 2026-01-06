'use client';

import { Tabs } from '@/shared/ui/Tabs';

import { LoginForm, RegisterForm } from '@/features';

import s from './AuthForm.module.scss';

const tabs = [
  {
    label: 'Sign In',
    value: 'login',
    content: <LoginForm />
  },
  {
    label: 'Sign Up',
    value: 'register',
    content: <RegisterForm />
  }
];

export const AuthForm = () => {
  return (
    <div className={s.authForm}>
      <div className={s.inner}>
        <Tabs tabs={tabs} defaultValue="login" />
      </div>
    </div>
  );
};
