import './styles.scss';

function FullPageError(): JSX.Element {
  return (
    <div className="full-page-error" role="alert">
      <h1 className="full-page-error__title">Something went wrong</h1>
      <p className="full-page-error__text">
        The server is unavailable. Please try again later.
      </p>
    </div>
  );
}

export default FullPageError;
