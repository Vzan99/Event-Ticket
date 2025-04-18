"use client";

import Link from "next/link";
import { useState, useEffect, ChangeEvent } from "react";
export default function NavBar() {
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    if (debouncedSearch) {
      console.log("Searching for:", debouncedSearch);
    }
  }, [debouncedSearch]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="navbar">
        <img
          className="small-logo"
          src="logo-quick-ticket.png"
          alt="logo-quick-ticket"
        ></img>
        <div className="nav-logo-text">Quick Ticket</div>
        <input
          type="text"
          className="nav-searchbar"
          placeholder="Search Here"
          value={search}
          onChange={handleInputChange}
        ></input>
        <div className="nav-links-group">
          <Link href="/" className="links">
            Events
          </Link>
          <Link href="/" className="links">
            Locations
          </Link>
          <Link href="/" className="links">
            Category
          </Link>
          <Link href="/" className="links">
            About
          </Link>
        </div>
        <div className="nav-buttons-group">
          <button className="buttonA">Sign In</button>
          <button className="buttonB">Get Started</button>
        </div>
      </div>
    </div>
  );
}
