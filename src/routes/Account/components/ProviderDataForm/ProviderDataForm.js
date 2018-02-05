import React from 'react'
import PropTypes from 'prop-types'
// import { List, ListItem } from 'material-ui/List'
// import AccountCircle from 'material-ui/svg-icons/action/account-circle'
import { List } from 'semantic-ui-react'
import classes from './ProviderDataForm.scss'

export const ProviderData = ({ providerData }) => (
  <div className={classes.container}>
    <List>
      {providerData.map((providerAccount, i) => (
        <div>
          <List.Item
            key={i}
            label="account-provider"
            content={providerAccount.providerId}
          />
          <List.Item
            key="displayName"
            label="display-name"
            content={providerAccount.displayName}
          />
          <List.Item
            key="email"
            label="email"
            content={providerAccount.email}
            disabled
          />
        </div>
      ))}
    </List>
  </div>
)

ProviderData.propTypes = {
  providerData: PropTypes.array.isRequired
}

export default ProviderData
