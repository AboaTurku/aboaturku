import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Content from '../components/Content'

const ProfileCard = ({ name, description, profilePicture, renderComponent }) => {
    const RenderComponent = renderComponent || Content
    return (
    <article className="profile tile is-child box">
        <figure className="image">
            <PreviewCompatibleImage imageInfo={{image: profilePicture}} style={{borderRadius: '6px 6px 0 0'}}/>
        </figure>
        <div className="profile-text">
            <h2 className="title">{name}</h2>
            <RenderComponent content={description} />
        </div>
    </article>
    )
}

ProfileCard.propTypes = {
  name: PropTypes.string,
  profilePicture: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.node,
  renderComponent: PropTypes.func
}

export default ProfileCard
