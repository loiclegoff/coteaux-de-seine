import React, { FunctionComponent } from "react"
import { AgendaEvent } from "../utils/model"

interface EventCardProps {
    event: AgendaEvent
}
const EventCard: FunctionComponent<EventCardProps> = ({event}) => {
    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    {event.dateStart.toLocaleDateString("fr-FR")}
                    -
                    {event.dateEnd.toLocaleDateString("fr-FR")}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    {event.text}
                </div>
            </div>
        </div>
    )
}

interface TimeLineProps {
    events: AgendaEvent[]
}

const EventCards: FunctionComponent<TimeLineProps> = ({events}) => {
  return (<>{
    events.map(event => <EventCard event={event}/>)
  }</>)
}

export default EventCards