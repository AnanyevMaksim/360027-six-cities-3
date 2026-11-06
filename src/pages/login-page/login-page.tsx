import { FormEvent, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '@/const';
import useAppDispatch from '@/hooks/use-app-dispatch';
import useAppSelector from '@/hooks/use-app-selector';
import {
  selectAuthorizationStatus,
  selectLoginStatus,
} from '@/store/user-process/selectors';
import { loginAction } from '@/store/api-actions';
import Header from '@/components/header/header';

const PASSWORD_PATTERN = '(?=.*[A-Za-z])(?=.*\\d).+';

function LoginPage(): JSX.Element {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const { isLoading } = useAppSelector(selectLoginStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Root} replace />;
  }

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current && passwordRef.current) {
      dispatch(
        loginAction({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      );
    }
  };

  return (
    <div className="page page--gray page--login">
      <Header isNavShown={false} />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleFormSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={emailRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  pattern={PASSWORD_PATTERN}
                  title="The password must contain at least one letter and one digit"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Sign in...' : 'Sign in'}
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
