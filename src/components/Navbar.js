import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <h2 style={{ color: '#fff', flexGrow: 1 }}>Wide Range Fresh</h2>
        {['/', '/about', '/media'].map((path, i) => {
          const label = ['Home','About','Media'][i];
          return (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `nav-link${isActive ? ' active' : ''}`
              }
            >
              {label}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
