const Navbar = ({ setCategory }) => {
  const categories = [
    "general",
    "technology",
    "business",
    "health",
    "sports",
    "entertainment",
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <span className="navbar-brand fw-bold fs-4">
          NEWS-TODAY
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {categories.map((cat) => (
              <li className="nav-item" key={cat}>
                <button
                  className="btn btn-link nav-link text-capitalize"
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
