import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Partner = ({ name, logo, link }) => {
    return (
        <article className="partner tile is-child box">
            <h1 className="has-text-centered has-text-weight-bold is-size-5">{name}</h1>
            <a href={link} target="_blank" title={name}>
                <figure className="image">
                    <PreviewCompatibleImage imageInfo={{image: logo}} fixed={true} />
                </figure>
            </a>
        </article>
    )
}

Partner.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  link: PropTypes.string
}

export default Partner
