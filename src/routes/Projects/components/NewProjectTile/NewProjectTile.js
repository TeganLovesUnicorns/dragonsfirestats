import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Segment } from 'semantic-ui-react'
import classes from './NewProjectTile.scss'

export const NewProjectTile = ({ onClick }) => (
  <div className={classes.container} onClick={onClick}>
    <Segment>
      <Icon name="add" size="massive" />
    </Segment>
  </div>
)

NewProjectTile.propTypes = {
  onClick: PropTypes.func
}

export default NewProjectTile
