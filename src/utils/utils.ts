import { Image } from "./model"

export const getBackgroundImageUrl = (image: Image) =>
  `url(${
    typeof image !== "string"
      ? !Array.isArray(image?.childImageSharp?.fluid)
        ? image?.childImageSharp?.fluid?.src
        : ""
      : image
  })`
