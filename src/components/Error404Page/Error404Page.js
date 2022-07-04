import React from "react";
import { Link } from "react-router-dom";
import "./Error404Page.css";

// ERROR 404 component for all the unrouted pages
function Error404() {
  return (
    <div className="not-found-main">
      <div className="not-found-wrap">
        <div className="not-found-404">
          <h1>404</h1>
        </div>
        <h2>Page not found</h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/" className="link-decorate">
          Go To Homepage
        </Link>
      </div>
    </div>
  );
}

export default Error404;
