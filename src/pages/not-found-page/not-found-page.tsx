import { Link } from 'react-router-dom';
import { AppRoute } from '@/const';
import './styles.scss';

function NotFoundPage(): JSX.Element {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404. Page not found</h1>
      <Link className="not-found__link" to={AppRoute.Root}>Go to main page</Link>
    </div>
  );
}

export default NotFoundPage;
