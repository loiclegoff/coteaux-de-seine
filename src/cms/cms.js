import CMS from "netlify-cms-app"
import uploadcare from "netlify-cms-media-library-uploadcare"
import cloudinary from "netlify-cms-media-library-cloudinary"

import AgendaPagePreview from "./preview-templates/AgendaPagePreview"
import ToolboxPostPreview from "./preview-templates/ToolboxPostPreview"
import TeamPagePreview from "./preview-templates/TeamPagePreview"
import IndexPagePreview from "./preview-templates/IndexPagePreview"

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate("index", IndexPagePreview)
CMS.registerPreviewTemplate("agenda", AgendaPagePreview)
CMS.registerPreviewTemplate("team", TeamPagePreview)
CMS.registerPreviewTemplate("blog", ToolboxPostPreview)
