import React from "react";
import { Link } from "react-router-dom";
function link({ to, name, type, color }) {
  return (
    <Link to={`/${to}`} className={type} color={color}>
      {name}
    </Link>
  );
}

export default link;
