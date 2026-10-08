import './styles.scss';

function Loader(): JSX.Element {
  return (
    <div className="loader" role="status">
      <span className="loader__spinner"></span>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default Loader;
