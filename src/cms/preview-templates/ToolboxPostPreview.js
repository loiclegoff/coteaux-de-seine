import React from "react"
import PropTypes from "prop-types"
import { ToolboxPostTemplate } from "../../templates/toolbox-post"

const ToolboxPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"])
  return (
    <ToolboxPostTemplate
      content={widgetFor("body")}
      description={entry.getIn(["data", "description"])}
      tags={tags && tags.toJS()}
      title={entry.getIn(["data", "title"])}
    />
  )
}

ToolboxPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ToolboxPostPreview
