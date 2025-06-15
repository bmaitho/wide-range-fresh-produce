import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav--sticky">
      <div className="container">
        <h2 className="brand">Wide Range Fresh</h2>
        <ul className="nav-links">
          {[
            { to: '/',      label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/products', label: 'Products' },
            { to: '/media',   label: 'Gallery' },
            { to: '/contact', label: 'Contact' },
          ].map(({to,label}) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({isActive}) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
);
}
