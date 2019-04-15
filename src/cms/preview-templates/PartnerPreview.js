import React from 'react'
import PropTypes from 'prop-types'
import Partner from '../../components/Partner'
const defaultName = "Sponsor Name"
const defaultLink = "https://"
const defaultLogo = "/img/person.svg"


const PartnerPreview = ({ entry, getAsset}) => {
    let name = entry.getIn(['data', 'name']);
    let link = entry.getIn(['data', 'link'])
    let logo = getAsset(entry.getIn(['data', 'logo']))
    name = name ? name : defaultName
    link = link ? link : defaultLink
    logo = logo ? logo.toString() : defaultLogo;
    return (
    <section className="section">
        <div className="tile is-ancestor">
            <div className="tile is-parent is-3"></div>
            <div className="tile is-parent is-6">
                <Partner {...{name, logo, link}} />
            </div>
            <div className="tile is-parent is-3"></div>
        </div>
    </section> )
}

PartnerPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PartnerPreview
