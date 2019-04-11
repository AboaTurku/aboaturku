import React from 'react'
import PropTypes from 'prop-types'
import ProfileCard from '../../components/ProfileCard'

const defaultName = "Your Name"
const defaultDescription = "Write about yourself"
const defaultProfilePicture = "/img/person.svg"


const ProfilePreview = ({ entry, getAsset, widgetFor }) => {
    let name = entry.getIn(['data', 'name']);
    let description = widgetFor('body')
    let profilePicture = getAsset(entry.getIn(['data', 'profilePicture']))
    name = name ? name : defaultName
    description = description ? description : defaultDescription
    profilePicture = profilePicture ? profilePicture.toString() : defaultProfilePicture;
    return (
    <section className="section">
        <div className="tile is-ancestor">
            <div className="tile is-parent is-3"></div>
            <div className="tile is-parent is-6">
                <ProfileCard
                    name={name}
                    profilePicture={profilePicture}
                    description={description}
                />
            </div>
            <div className="tile is-parent is-3"></div>
        </div>
    </section> )
}

ProfilePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func
}

export default ProfilePreview
