import React from 'react'
import PropTypes from 'prop-types'
// import Paper from 'material-ui/Paper'
// import ContentAddCircle from 'material-ui/svg-icons/content/add-circle'
import { Icon, Segment } from 'semantic-ui-react'
import classes from './NewProjectTile.scss'

export const NewProjectTile = ({ onClick }) => (
  <div className={classes.container} onClick={onClick}>
    {/* <Paper className={classes.container} onClick={onClick}> */}
    <Segment>
      <Icon name="add" size="massive" />
    </Segment>
    {/* </Paper> */}
  </div>
)

NewProjectTile.propTypes = {
  onClick: PropTypes.func
}

export default NewProjectTile
