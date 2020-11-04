import React from "react"
import PropTypes from "prop-types"
import { TeamPageTemplate } from "../../templates/team-page"

const TeamPagePreview = ({ entry, getAsset }) => {
  const entryTeams = entry.getIn(["data", "teams"])
  const teams = entryTeams ? entryTeams.toJS() : []

  return (
    <TeamPageTemplate
      image={getAsset(entry.getIn(["data", "image"]))}
      title={entry.getIn(["data", "title"])}
      subtitle={entry.getIn(["data", "subtitle"])}
      description={entry.getIn(["data", "description"])}
      teams={teams}
    />
  )
}

TeamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TeamPagePreview
