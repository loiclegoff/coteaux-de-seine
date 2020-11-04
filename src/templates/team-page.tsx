import React, { FunctionComponent } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

import {
  Frontmatter,
  Testimonial,
  Pricing as PricingProps,
  Image,
  ImageSharp,
} from "../utils/model"
import { getBackgroundImageUrl } from "../utils/utils"


export const TeamPageTemplate: FunctionComponent<TeamProps> = ({
  image,
  title,
  subtitle,
  description,
  teams,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: getBackgroundImageUrl(image),
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: "0.5rem 0 0 #003a5d, -0.5rem 0 0 #003a5d",
          backgroundColor: "#003a5d",
          color: "white",
          padding: "1rem",
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{subtitle}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                  </h3>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

interface Member {
  name: string
  image: Image
  function: string
}

interface Team {
  name: string
  description: string
  members: Member[]
}

interface TeamProps {
  title: string
  subtitle: string
  image: Image
  description: string,
  teams: Team[]
}

interface TeamPageProps {
  data: {
    markdownRemark: {
      frontmatter: TeamProps
    }
  }
}

const TeamPage: FunctionComponent<TeamPageProps> = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TeamPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        description={frontmatter.description}
        teams={frontmatter.teams ?? []}
      />
    </Layout>
  )
}

export default TeamPage

export const teamPageQuery = graphql`
  query TeamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 526, quality: 92) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subtitle
        description
      }
    }
  }
`