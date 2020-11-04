import React, { FunctionComponent } from "react"
import { Helmet } from "react-helmet"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "./all.sass"
import useSiteMetadata from "./SiteMetadata"
import { withPrefix } from "gatsby"

const TemplateWrapper: FunctionComponent = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="fr" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}favicon-32x32.png`}
          sizes="32x32"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="siteweb" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
