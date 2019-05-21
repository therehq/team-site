import React from 'react'
import * as Sentry from '@sentry/browser'

Sentry.init({
  dsn: 'https://70c5f782f9864c95860ece5b280718d4@sentry.io/1464032'
})

export class ExampleBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, eventId: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error })
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo)
      const eventId = Sentry.captureException(error)
      this.setState({ eventId })
    })
  }

  render() {
    if (this.state.error) {
      //render fallback UI
      return (
        <a
          onClick={() =>
            Sentry.showReportDialog({ eventId: this.state.eventId })
          }
        >
          Report feedback
        </a>
      )
    } else {
      //when there's not an error, render children untouched
      return this.props.children
    }
  }
}
