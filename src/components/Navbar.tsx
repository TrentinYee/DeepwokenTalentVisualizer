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
        <span className="navbar-brand mb-0 h1">{heading}</span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {items.map((item, index) => (
              <li key={item}>
                <Link className="nav-link" to={links[index]}>
                  {item}
                </Link>
              </li>
            ))}
            ;
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
