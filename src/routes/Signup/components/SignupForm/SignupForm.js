import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { LabelInputField } from 'react-semantic-redux-form'
import { Button } from 'semantic-ui-react'
import { required, validateEmail } from 'utils/form'
import classes from './SignupForm.scss'

const SignupForm = ({ pristine, submitting, handleSubmit }) => (
  <form className={classes.container} onSubmit={handleSubmit}>
    <Field
      name="username"
      component={LabelInputField}
      label="Username"
      validate={required}
    />
    <Field
      name="email"
      component={LabelInputField}
      label="Email"
      validate={[required, validateEmail]}
    />
    <Field
      name="password"
      component={LabelInputField}
      label="Password"
      type="password"
      validate={required}
    />
    <div className={classes.submit}>
      <Button positive type="submit" disabled={pristine || submitting}>
        Signup
      </Button>
    </div>
  </form>
)

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  pristine: PropTypes.bool.isRequired, // added by redux-form
  submitting: PropTypes.bool.isRequired, // added by redux-form
  handleSubmit: PropTypes.func.isRequired // added by redux-form (calls onSubmit)
}

export default SignupForm
