import { Link } from "react-router-dom";

interface Props {
  items: string[];
  links: string[];
  heading: string;
}

const Navbar = ({ items, links, heading }: Props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid">
        {/* Header */}
        <span className="navbar-brand fs-1">{heading}</span>
        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Collapsible Links */}
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Link rendering */}
            {items.map((item, index) => (
              <li key={item} className="nav-item">
                <Link className="nav-link fs-4" to={links[index]}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
