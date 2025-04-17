import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <div className="navbar">
        <img
          className="nav-logo"
          src="quick-ticket-logo.png"
          alt="quick-ticket-logo"
        ></img>
        <div className="nav-logo-text">Quick Ticket</div>
        <textarea
          className="nav-searchbar"
          placeholder="Search Here"
        ></textarea>
        <div className="nav-links-group">
          <Link href="/" className="nav-links">
            Events
          </Link>
          <Link href="/" className="nav-links">
            Locations
          </Link>
          <Link href="/" className="nav-links">
            Category
          </Link>
          <Link href="/" className="nav-links">
            About
          </Link>
        </div>
        <div className="nav-buttons-group">
          <button className="button">Sign In</button>
          <button className="button">Get Started</button>
        </div>
      </div>
    </div>
  );
}
