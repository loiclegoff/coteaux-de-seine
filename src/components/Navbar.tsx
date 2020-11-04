import React, { FunctionComponent, useState, useEffect } from "react"
import { Link } from "gatsby"
import { texts } from "../i18n"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarWeek, faMailBulk, faToolbox, IconDefinition } from "@fortawesome/free-solid-svg-icons"

enum Route {
  HOME = "/",
  AGENDA = "/agenda",
  TEAM = "/team",
  TOOLBOX = "/toolbox",
  CONTACT = "/contact"
}
interface NavElementProps {
  title: string
  path: string
  icon?: IconDefinition
}

const NavElement:FunctionComponent<NavElementProps> = ({path, title, icon}) => <p className="control">
  <Link className='navbar-item'to={path}>
      {icon && <span className="icon"><FontAwesomeIcon icon={icon}/></span>}
      <span>{title}</span>
  </Link>
</p>

const Navbar: FunctionComponent = () => {
  const [active, setActive] = useState<boolean>(false)
  const [navBarActiveClass, setNavBarActiveClass] = useState<string>("")

  useEffect(
    () =>
      active ? setNavBarActiveClass("is-active") : setNavBarActiveClass(""),
    [active]
  )

  const toggleHamburger = () => {
    setActive(!active)
  }

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavElement
            path={Route.HOME}
            title={texts.nav.home}
          />
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={toggleHamburger}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
          <div className="navbar-start has-text-centered">
            <NavElement
              path={Route.AGENDA}
              title={texts.nav.agenda}
              icon={faCalendarWeek}
            />
            {/* <NavElement
              path={Route.TEAM}
              title={texts.nav.team}
              icon={faUsers}
            /> */}
            <NavElement
              path={Route.TOOLBOX}
              title={texts.nav.toolbox}
              icon={faToolbox}
            />
            <NavElement
              path={Route.CONTACT}
              title={texts.nav.contact}
              icon={faMailBulk}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
