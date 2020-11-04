import React, { FunctionComponent } from "react"
import Img, { GatsbyImageProps } from "gatsby-image"
import { Image } from "../utils/model"

interface PreviewCompatibleImageProps {
  imageInfo: {
    alt?: string
    childImageSharp?: GatsbyImageProps
    image?: Image
    style?: object
  }
}

const PreviewCompatibleImage: FunctionComponent<PreviewCompatibleImageProps> = ({
  imageInfo,
}) => {
  const imageStyle = { borderRadius: "5px" }
  const { alt = "", childImageSharp, image } = imageInfo

  if (!!image && typeof image !== "string" && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === "string")
    return <img style={imageStyle} src={image} alt={alt} />

  return null
}

export default PreviewCompatibleImage
