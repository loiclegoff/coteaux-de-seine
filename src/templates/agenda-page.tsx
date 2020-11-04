import React, { FunctionComponent, useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"
import TimeLine from "../components/TimeLine"
import { AgendaEvent } from "../utils/model"
import EventCards from "../components/EventCards"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faHistory } from '@fortawesome/free-solid-svg-icons'
import { texts } from "../i18n"

export enum DateFilter {
  ALL = "allDates",
  NEXT = "nextDates"
}

interface AgendaTabProps {
  dateFilter: DateFilter
  setDateFilter: (value: DateFilter) => void
}

const AgendaTab: FunctionComponent<AgendaTabProps> = ({dateFilter, setDateFilter}) => {
  return <div className="tabs is-boxed">
  <ul>
    <li className={dateFilter === DateFilter.NEXT ? "is-active" : undefined}>
      <a onClick={setDateFilter.bind(null, DateFilter.NEXT)}>
        <span className="icon is-small"><FontAwesomeIcon icon={faCoffee}/></span>
        <span>{texts.agenda.nextDates}</span>
      </a>
    </li>
    <li className={dateFilter === DateFilter.ALL ? "is-active" : undefined}>
      <a onClick={setDateFilter.bind(null, DateFilter.ALL)}>
        <span className="icon is-small"><FontAwesomeIcon icon={faHistory}/></span>
        <span>{texts.agenda.allDates}</span>
      </a>
    </li>
  </ul>
</div>
}

interface AgendaPageTemplateProps {
  events: AgendaEvent[]
  timeLine?: boolean
  content?: any
  contentComponent?: any
}

export const AgendaPageTemplate: FunctionComponent<AgendaPageTemplateProps> = ({
  events,
  timeLine = true,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content
  const [dateFilter, setDateFilter] = useState<DateFilter>(DateFilter.NEXT)

  const [filteredEvents, setFilteredEvent] = useState<AgendaEvent[]>([])

  useEffect(() => {
      const currentDate = new Date(Date.now())
      if(dateFilter === DateFilter.ALL) {
        setFilteredEvent(events)
      } else {
        setFilteredEvent(events.filter(event => event.dateEnd > currentDate))
      }
    }, [dateFilter])

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <AgendaTab dateFilter={dateFilter} setDateFilter={setDateFilter}/>
              {timeLine ? <TimeLine events={filteredEvents}/> : <EventCards events={events}/>}
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface AgendaPageProps {
  data: {
    markdownRemark: {
      html: any
      frontmatter: {
        events: AgendaEvent[]
      }
    }
  }
}

const AgendaPage: FunctionComponent<AgendaPageProps> = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AgendaPageTemplate
        contentComponent={HTMLContent}
        events={post.frontmatter.events.map(event => ({...event, dateStart: new Date(event.dateStart), dateEnd: new Date(event.dateEnd)})) ?? []}
        content={post.html}
      />
    </Layout>
  )
}

export default AgendaPage

export const agendaPageQuery = graphql`
  query AgendaPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        events {
          title
          dateStart
          dateEnd
          text
          detailedText
          imageUrl
        }
      }
    }
  }
`
