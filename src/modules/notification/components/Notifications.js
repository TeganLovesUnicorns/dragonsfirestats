import React from 'react'
import PropTypes from 'prop-types'
import { size } from 'lodash'
import { connect } from 'react-redux'
import { pure, compose, renderNothing, branch } from 'recompose'
import { Message } from 'semantic-ui-react'
import * as actions from '../actions'

export const Notifications = ({ allIds, byId, dismissNotification }) => (
  <div>
    {allIds.map(id => (
      <Message
        key={id}
        compact
        color="black"
        onDismiss={() => dismissNotification(id)}
        content={byId[id].message}
      />
    ))}
  </div>
)

Notifications.propTypes = {
  allIds: PropTypes.array.isRequired,
  byId: PropTypes.object.isRequired,
  dismissNotification: PropTypes.func.isRequired
}

export default compose(
  pure,
  connect(({ notifications: { allIds, byId } }) => ({ allIds, byId }), actions),
  branch(props => !size(props.allIds), renderNothing) // only render if notifications exist
)(Notifications)
