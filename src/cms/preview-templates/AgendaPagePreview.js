import React from "react"
import PropTypes from "prop-types"
import { AgendaPageTemplate } from "../../templates/agenda-page"

const AgendaPagePreview = ({ entry, widgetFor }) => (
  <AgendaPageTemplate
    events={entry.getIn(["data", "events"])}
    content={widgetFor("body")}
  />
)

AgendaPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AgendaPagePreview
