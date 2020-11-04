import React, { FunctionComponent } from "react"
import { Link } from "gatsby"

import { texts } from "../i18n"

const Footer: FunctionComponent = () => (
  <footer className="footer has-background-primary has-text-white-ter">
    <div className="content has-text-centered">
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <section className="menu">
              <ul className="menu-list">
                <li>
                  <Link to="/" className="navbar-item">
                    {texts.nav.home}
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/agenda">
                    {texts.nav.agenda}
                  </Link>
                </li>
                <li>
                  <a
                    className="navbar-item"
                    href="/admin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Admin
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="column is-4">
            <section>
              <ul className="menu-list">
                <li>
                  <Link className="navbar-item" to="/toolbox">
                    {texts.toolbox.title}
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/contact">
                    {texts.contact.title}
                  </Link>
                </li>
              </ul>
            </section>
          </div>

        </div>
      </div>
    </div>
  </footer>
)

export default Footer
