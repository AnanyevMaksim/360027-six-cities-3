import Logo from '@/components/logo/logo';
import Nav from '@/components/nav/nav';

type HeaderProps = {
  isActiveLogo?: boolean;
  isNavShown?: boolean;
};

function Header({
  isActiveLogo = false,
  isNavShown = true,
}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo type="header" isActive={isActiveLogo} />
          </div>
          {isNavShown && <Nav />}
        </div>
      </div>
    </header>
  );
}

export default Header;
