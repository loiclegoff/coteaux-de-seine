import React, { FunctionComponent } from "react"
import { kebabCase } from "lodash"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"

interface BlogPostTemplateProps {
  content: any
  contentComponent: any
  description: string
  tags: string[]
  title: string
  helmet?: JSX.Element
}

export const ToolboxPostTemplate: FunctionComponent<BlogPostTemplateProps> = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

interface BlogPostProps {
  data: {
    markdownRemark: {
      html: any
      frontmatter: {
        title: string
        description: string
        tags: string[]
      }
    }
  }
}

const ToolboxPost: FunctionComponent<BlogPostProps> = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ToolboxPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Toolbox">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

export default ToolboxPost

export const pageQuery = graphql`
  query ToolboxPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD MM YYYY")
        title
        description
        tags
      }
    }
  }
`
