import { AuthForm } from '@/widgets/auth/ui/AuthForm';

import s from './AuthPage.module.scss';

export const AuthPage = () => {
  return (
    <div className={s.authPage}>
      <AuthForm />
    </div>
  );
};
