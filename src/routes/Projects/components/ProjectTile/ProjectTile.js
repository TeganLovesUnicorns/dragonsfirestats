import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Icon, Button } from 'semantic-ui-react'
import classes from './ProjectTile.scss'

const inlineStyle = {
  icon: {
    marginTop: '0px',
    marginBottom: '0px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

export const ProjectTile = ({ name, onSelect, onDelete, showDelete }) => (
  <Segment className={classes.container}>
    <div className={classes.top}>
      <span className={classes.name} onClick={onSelect}>
        {name || 'No Name'}
      </span>
      {showDelete && onDelete ? (
        <Button onClick={onDelete}>
          <Icon name="delete" style={inlineStyle.icon} />
        </Button>
      ) : null}
    </div>
  </Segment>
)

ProjectTile.propTypes = {
  name: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  showDelete: PropTypes.bool
}

ProjectTile.defaultProps = {
  showDelete: true
}

export default ProjectTile
