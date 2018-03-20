import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Form, Icon, Button } from 'semantic-ui-react'
import { LabelInputField } from 'react-semantic-redux-form'
import ProviderDataForm from '../ProviderDataForm'
import classes from './AccountForm.scss'

export const AccountForm = ({
  account,
  handleSubmit,
  submitting,
  pristine
}) => (
  <Form className={classes.container} onSubmit={handleSubmit}>
    <h4>Account</h4>
    <div className={classes.fields}>
      <Field
        name="displayName"
        component={LabelInputField}
        label={{ content: <Icon color="blue" name="user" size="large" /> }}
        labelPosition="left"
        placeholder="Username"
      />
      <Field
        name="email"
        component={LabelInputField}
        label={{ content: <Icon color="blue" name="mail" size="large" /> }}
        labelPosition="left"
        placeholder="E-mail"
      />
      <Field
        name="avatarUrl"
        component={LabelInputField}
        label={{ content: <Icon color="blue" name="content" size="large" /> }}
        labelPosition="left"
        placeholder="Avatar URL"
      />
    </div>
    {!!account &&
      !!account.providerData && (
        <div>
          <h4>Linked Accounts</h4>
          <ProviderDataForm providerData={account.providerData} />
        </div>
      )}
    <Button
      primary
      type="submit"
      disabled={pristine || submitting}>
      {submitting ? 'Saving' : 'Save'}
    </Button>
  </Form>
)

AccountForm.propTypes = {
  account: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default AccountForm
