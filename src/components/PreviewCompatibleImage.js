import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo, style, fixed }) => {
  const isFixed = fixed || false
  const imageStyle = style || { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    if (isFixed) {
      return (
        <Img style={imageStyle} fixed={image.childImageSharp.fixed} alt={alt} />
      )
    } else {
      return (
        <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
      )
    }
  }

  if (!!childImageSharp) {
    if (isFixed) {
      return (
        <Img style={imageStyle} fixed={childImageSharp.fixed} alt={alt} />
      )
    } else {
      return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
    }
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
