import React, { FunctionComponent } from "react"
import { Link, graphql } from "gatsby"
// import Typed from "react-typed"
import Layout from "../components/Layout"
import BlogRoll from "../components/BlogRoll"
import { Image } from "../utils/model"
import { getBackgroundImageUrl } from "../utils/utils"
import { texts } from "../i18n"

export const IndexPageTemplate: FunctionComponent<IndexProps> = ({
  image,
  title,
  subtitle,
  description,
}) => (
  <><section className="hero is-medium intro">
    <div
      className="hero-body full-width-image margin-top-0"
      style={{
        backgroundImage: getBackgroundImageUrl(image),
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              "#003a5d 0.5rem 0px 0px, #003a5d -0.5rem 0px 0px",
            backgroundColor: "#003a5d",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              "#003a5d 0.5rem 0px 0px, #003a5d -0.5rem 0px 0px",
            backgroundColor: "#003a5d",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {subtitle}
          {/* <Typed
            loop
            typeSpeed={80}
            backSpeed={20}
            strings={[subtitle]}
            smartBackspace
            backDelay={1000}
            loopCount={0}
            showCursor
            cursorChar="|"
          /> */}
        </h3>
      </div>
    </div>

  </section>
  <section className="section section--gradient">
  <div className="container">
    <div className="section">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="content">
            <div className="columns">
              <div className="column is-12">
                <p>{description}</p>
              </div>
            </div>
            <div className="column is-12">
              <h3 className="has-text-weight-semibold is-size-2">
                {texts.index.toolbox}
              </h3>
              <BlogRoll />
              <div className="column is-12 has-text-centered">
                <Link className="btn" to="/toolbox">
                  {texts.index.readMore}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section></>
)

export interface IndexProps {
  image: Image
  title: string
  subtitle: string
  description: string

}


interface IndexPageProps {
  data: {
    markdownRemark: {
      frontmatter: IndexProps
    }
  }
}

const IndexPage: FunctionComponent<IndexPageProps> = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        description={frontmatter.description}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
  }
`
