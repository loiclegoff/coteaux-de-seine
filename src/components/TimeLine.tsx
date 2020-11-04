import React, { FunctionComponent, useEffect, useMemo, useState } from "react"
import { AgendaEvent } from "../utils/model"
import { Chrono, TimelineItem } from "react-chrono";

// const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };

const formatEvent = (event: AgendaEvent): TimelineItem => {
  const dateStart = event.dateStart.toLocaleDateString("fr-FR")
  const dateEnd = event.dateEnd.toLocaleDateString("fr-FR")
  if (event.dateEnd != event.dateStart) {

  }
  return {
    title: dateEnd !== dateStart ? `${dateStart} - ${dateEnd}` : dateStart,
    contentTitle: event.title !== "" ? event.title : undefined,
    media: event.imageUrl !== "" ? {
      name: event.title,
      source: {
        url: event.imageUrl
      },
      type: "IMAGE"
    } : undefined,
    contentText: event.text,
    contentDetailedText: event.detailedText !== "" ? event.detailedText : undefined
  }
}

interface TimeLineProps {
    events: AgendaEvent[]
}


const TimeLine: FunctionComponent<TimeLineProps> = ({events}) => {
  return (
    <Chrono
      key={events.length}
      items = {events.map(formatEvent)}
      mode="VERTICAL"
    />
  )
}

export default TimeLine