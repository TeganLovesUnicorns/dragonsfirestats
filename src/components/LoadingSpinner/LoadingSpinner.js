import React from 'react'
import PropTypes from 'prop-types'
import { Loader, Segment } from 'semantic-ui-react'
import classes from './LoadingSpinner.scss'

export const LoadingSpinner = ({ size }) => (
  <div className={classes.container}>
    <div className={classes.progress}>
      <Segment>
        <Loader active inline="centered" indeterminate size="large" />
      </Segment>
    </div>
  </div>
)

LoadingSpinner.propTypes = {
  size: PropTypes.number
}

export default LoadingSpinner
