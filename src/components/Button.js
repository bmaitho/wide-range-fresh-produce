import { Link } from 'react-router-dom';

export default function Button({ to, children, variant = 'primary', size = 'md' }) {
  return (
    <Link className={`btn btn--${variant} btn--${size}`} to={to}>
      {children}
    </Link>
  );
}
