import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Segment } from 'semantic-ui-react'
import classes from './NewProjectTile.scss'

export const NewProjectTile = ({ onClick }) => (
  <Segment className={classes.container} onClick={onClick}>
    <Icon name="add" size="massive" />
  </Segment>
)

NewProjectTile.propTypes = {
  onClick: PropTypes.func
}

export default NewProjectTile
