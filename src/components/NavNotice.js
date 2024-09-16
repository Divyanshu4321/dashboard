import React from "react";
import "./nav.css";

const NavNotice = () => {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="/" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">4</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have 4 new notifications
          <a href="/">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notifications-item">
          <i className="bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4>Lorem Ipsum</h4>
            <p>asdfghjklwertyuio</p>
            <p>30 min ago</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notifications-item">
          <i className="bi bi-x-circle text-danger"></i>
          <div>
            <h4>demo 2</h4>
            <p>qwertyuiop</p>
            <p>1h ago</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notifications-item">
          <i className="bi bi-check-circle text-success"></i>
          <div>
            <h4>demo3</h4>
            <p>lkjhgfdsa</p>
            <p>2h ago</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notifications-item">
          <i className="bi bi-info-circle text-primary"></i>
          <div>
            <h4>demo5</h4>
            <p>poiuytre</p>
            <p>4 hr ago </p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="dropdown-footer text-center">
          <a href="/">Show all notifications</a>
        </li>
      </ul>
    </li>
  );
};

export default NavNotice;
