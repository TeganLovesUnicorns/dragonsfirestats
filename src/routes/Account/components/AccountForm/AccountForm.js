import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Form, Icon, Button } from 'semantic-ui-react'
// import RaisedButton from 'material-ui/RaisedButton'
// import { TextField } from 'redux-form-material-ui'
import { LabelInputField } from 'react-semantic-redux-form'
import ProviderDataForm from '../ProviderDataForm'
import classes from './AccountForm.scss'

export const AccountForm = ({
  account,
  handleSubmit,
  submitting,
  pristine
}) => (
  <form className={classes.container} onSubmit={handleSubmit}>
    <h4>Account</h4>
    <div className={classes.fields}>
      <Field
        name="displayName"
        component={LabelInputField}
        label={{ content: <Icon color='blue' name='user' size='large'/> }}
        labelPosition='left'
        placeholder='Username'
      />
      <Field name="email" component={TextField} floatingLabelText="Email" />
      <Field
        name="avatarUrl"
        component={TextField}
        floatingLabelText="Avatar Url"
      />
    </div>
    {!!account &&
      !!account.providerData && (
        <div>
          <h4>Linked Accounts</h4>
          <ProviderDataForm providerData={account.providerData} />
        </div>
      )}
    <RaisedButton
      primary
      label={submitting ? 'Saving' : 'Save'}
      type="submit"
      disabled={pristine || submitting}
    />
  </form>
)

AccountForm.propTypes = {
  account: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default AccountForm
