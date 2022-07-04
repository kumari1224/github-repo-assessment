import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  return (
    <div className="error-page-main">
      <div className="error-page-wrap">
        <div className="error-page-content">
          <h1>Oops!!</h1>
        </div>
        <h2>Looks like something went wrong</h2>
        <Link to="/" className="link-decorate">
          Go To Homepage
        </Link>
      </div>
    </div>
  );
}
