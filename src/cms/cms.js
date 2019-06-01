import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ProjectPagePreview from './preview-templates/ProjectPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProfilePreview from './preview-templates/ProfilePreview'
import PartnerPreview from './preview-templates/PartnerPreview'
import SupportPagePreview from './preview-templates/SupportPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('projects', ProjectPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('profile', ProfilePreview)
CMS.registerPreviewTemplate('partner', PartnerPreview)
CMS.registerPreviewTemplate('support', SupportPagePreview)

