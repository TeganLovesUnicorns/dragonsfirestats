import React from 'react'
import PropTypes from 'prop-types'
// import Dialog from 'material-ui/Dialog'
// import FlatButton from 'material-ui/FlatButton'
import { Field } from 'redux-form'
import { Modal, Button, Form } from 'semantic-ui-react'
import { LabelInputField } from 'react-semantic-redux-form'
// import { TextField } from 'redux-form-material-ui'
import { required } from 'utils/form'

import classes from './NewProjectDialog.scss'

export const NewProjectDialog = ({
  open,
  onRequestClose,
  submit,
  handleSubmit
}) => (
  <Modal
    open={open}
    onRequestClose={onRequestClose}
    contentClassName={classes.container}>
    <Modal.Header>New Project</Modal.Header>
    <Form onSubmit={handleSubmit} className={classes.inputs}>
      <Field
        name="name"
        component={LabelInputField}
        label="Name"
        validate={[required]}
      />
      <Field
        name="screenname"
        component={LabelInputField}
        label="Screen Name"
        validate={[required]}
      />
    </Form>
    <Button.Group>
      <Button negative onClick={onRequestClose}>
        Cancel
      </Button>
      <Button.Or />
      <Button positive onClick={submit}>
        Submit
      </Button>
    </Button.Group>
  </Modal>
)

NewProjectDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  handleSubmit: PropTypes.func.isRequired, // added by redux-form
  submit: PropTypes.func.isRequired // added by redux-form
}

export default NewProjectDialog
