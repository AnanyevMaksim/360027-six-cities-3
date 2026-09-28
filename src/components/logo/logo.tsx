import clsx from 'clsx';

type LogoType = 'header' | 'footer';

type LogoProps = {
  type: LogoType;
  isActive?: boolean;
};

const LogoTypeToSize: Record<LogoType, { width: number; height: number }> = {
  header: {
    width: 81,
    height: 41,
  },
  footer: {
    width: 64,
    height: 33,
  },
};

function Logo({ type, isActive = false }: LogoProps): JSX.Element {
  const { width, height } = LogoTypeToSize[type];

  return (
    <a
      className={clsx(
        `${type}__logo-link`,
        isActive && `${type}__logo-link--active`,
      )}
      href={isActive ? undefined : 'main.html'}
    >
      <img
        className={`${type}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </a>
  );
}

export default Logo;
