import { GatsbyImageProps } from "gatsby-image"

export interface Testimonial {
  quote: string
  author: string
}

export interface SiteMetadata {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

export interface ImageSharp {
  childImageSharp: GatsbyImageProps
}

export type Image = string | ImageSharp

export interface Frontmatter {
  image: Image
  title: string
  subtitle: string
  description: string
  intro: {
    blurbs: {
      image: Image
      text: string
    }[]
  }
}

export interface Plan {
  plan: string
  price: string | number
  description: string
  items: any[]
}

export interface Pricing {
  heading: string
  description: string
  plans: Plan[]
}

export interface AgendaEvent {
  dateStart: Date,
  dateEnd: Date
  title: string,
  text: string
  detailedText: string
  imageUrl: string
}