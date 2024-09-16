import React from "react";
import "./nav.css"

const NavMessage = () => {
  return (
    <div>
      <li className="nav-item dropdown">
        <a className="nav-link nav-icon" href="/" data-bs-toggle="dropdown">
          <i className="bi bi-chat-left-text"></i>
          <span className="badge bg-success badge-number">3</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
          <li className="dropdown-header">
            You have 3 new notifications
            <a href="/">
              <span className="badge rounded-pill bg-primary p-2 ms-2">
                View all
              </span>
            </a>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li className="messages-item">
            <a href="/">
            <img src="/" alt="" className="rounded-circle" />

              <div>
                <h4>Lorem Ipsum</h4>
                <p>asdfghjklwertyuio</p>
                <p>30 min ago</p>
              </div>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li className="messages-item">
            <a href="/">
            <img src="/" alt="" className="rounded-circle" />

              <div>
                <h4>Lorem Ipsum</h4>
                <p>asdfghjklwertyuio</p>
                <p>30 min ago</p>
              </div>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li className="messages-item">
            <a href="/">
            <img src="/" alt="" className="rounded-circle" />

              <div>
                <h4>Lorem Ipsum</h4>
                <p>asdfghjklwertyuio</p>
                <p>30 min ago</p>
              </div>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li className="messages-item">
            <a href="/">
            <img src="/" alt="" className="rounded-circle" />

              <div>
                <h4>Lorem Ipsum</h4>
                <p>asdfghjklwertyuio</p>
                <p>30 min ago</p>
              </div>
            </a>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>
          <li className="dropdown-footer text-center">
            <a href="/">Show all Messages</a>
          </li>
        </ul>
      </li>
    </div>
  );
};

export default NavMessage;
