import React from 'react'
import PropTypes from 'prop-types'
import { ContentPageTemplate } from '../../templates/content-page'

const SupportPagePreview = ({ entry, widgetFor }) => (
  <ContentPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

SupportPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SupportPagePreview
