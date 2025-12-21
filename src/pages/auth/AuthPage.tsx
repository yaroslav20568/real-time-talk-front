import { AuthForm } from '@/widgets/AuthForm';

import s from './AuthPage.module.scss';

const AuthPage = () => {
  return (
    <div className={s.authPage}>
      <AuthForm />
    </div>
  );
};

export default AuthPage;
