import React from "react"
import Layout from "../../components/Layout"
import { texts } from "../../i18n"

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>{texts.contact.thanks.title}</h1>
          <p>{texts.contact.thanks.message}</p>
        </div>
      </div>
    </section>
  </Layout>
)
