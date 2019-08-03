import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../navbar.css";

export default (props) => {
  const [active, setActive] = useState(1);
  
  return (
    <div>
      <nav>
        <div className={active === 1 ? "active" : "none"}>
          <Link className="link" to="/watch" >
            <span>
              <i className="fa fa-tag" aria-hidden="true" />
            </span>
            <div className="text-center">WatchList</div>
          </Link>
        </div>
        <div className={active === 2 ? "active" : "none"}>
          <Link className="link" to="/orders">
            <span>
              <i className="fa fa-tag" aria-hidden="true" />
            </span>
            <div className="text-center">Orders</div>
          </Link>
        </div>
        <div className={active === 3 ? "active" : "none"}>
          <Link className="link" to="/portfolio">
            <span>
              <i className="fa fa-tag" aria-hidden="true" />
            </span>
            <div className="text-center">Portfolio</div>
          </Link>
        </div>
        <div className={active === 4 ? "active" : "none"}>
          <Link className="link" to="/shaw">
            <span>
              <i className="fa fa-tag" aria-hidden="true" />
            </span>
            <div className="text-center">FD8825</div>
          </Link>
        </div>
      </nav>
    </div>
  );
};
