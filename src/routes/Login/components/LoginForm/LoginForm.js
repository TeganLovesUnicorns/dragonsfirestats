import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { LabelInputField } from 'react-semantic-redux-form'
import { Form, Icon, Button } from 'semantic-ui-react'
// import { TextField } from 'redux-form-material-ui'
// import RaisedButton from 'material-ui/RaisedButton'
import { required, validateEmail } from 'utils/form'
import classes from './LoginForm.scss'

export const LoginForm = ({ pristine, submitting, handleSubmit }) => (
  <Form className={classes.container} onSubmit={handleSubmit}>
    <Field
      name="email"
      component={LabelInputField}
      label={{ content: <Icon color="blue" name="user" size="large" /> }}
      labelPosition="left"
      placeholder="E-mail"
      // component={TextField}
      // floatingLabelText="Email"
      validate={[required, validateEmail]}
    />
    <Field
      name="password"
      component={LabelInputField}
      label={{ content: <Icon color="blue" name="lock" size="large" /> }}
      labelPosition="left"
      placeholder="Password"
      // name="password"
      // component={TextField}
      // floatingLabelText="Password"
      type="password"
      validate={required}
    />
    <div className={classes.submit}>
      <Button primary type="submit" disabled={pristine || submitting}>
        {submitting ? 'Loading' : 'Login'}
      </Button>
    </div>
  </Form>
)

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  pristine: PropTypes.bool.isRequired, // added by redux-form
  submitting: PropTypes.bool.isRequired, // added by redux-form
  handleSubmit: PropTypes.func.isRequired // added by redux-form (calls onSubmit)
}

export default LoginForm
