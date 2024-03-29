import React from "react";
import "./FooterItem.css";
import { Link } from "react-router-dom";

function FooterItem({ title, links }) {
  return (
    <div className="footerItem">
      <span className="header-2 text-white font-goldplay-300">{title}</span>
      <div className="footerItem-links">
        {links.map((item) => (
          <Link
            to={item.to}
            className="standard-text text-white font-goldplay-200"
            style={{
              textDecoration: "none",
            }}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FooterItem;
