import React, { FunctionComponent } from "react"

import Layout from "../../components/Layout"
import BlogRoll from "../../components/BlogRoll"
import { texts } from "../../i18n"

const ToolBoxIndexPage: FunctionComponent = () => {
  return (
    <Layout>
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('/img/toolbox.jpg')`,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: "0.5rem 0 0 #003a5d, -0.5rem 0 0 #003a5d",
            backgroundColor: "#003a5d",
            color: "white",
            padding: "1rem",
          }}
        >
          {texts.toolbox.title}
        </h1>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <BlogRoll />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ToolBoxIndexPage
