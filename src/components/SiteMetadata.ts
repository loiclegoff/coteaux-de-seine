import { graphql, useStaticQuery } from "gatsby"
import { SiteMetadata } from "../utils/model"

const useSiteMetadata = () => {
  const { site }: SiteMetadata = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
