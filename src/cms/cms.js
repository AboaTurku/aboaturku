import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProfilePreview from './preview-templates/ProfilePreview'
import PartnerPreview from './preview-templates/PartnerPreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('profile', ProfilePreview)
CMS.registerPreviewTemplate('partner', PartnerPreview)
