import React from 'react'
import PropTypes from 'prop-types'
// import Avatar from 'material-ui/Avatar'
import { Dropdown, Menu, Image } from 'semantic-ui-react'
import defaultUserImage from 'static/User.png'
// import classes from './Navbar.scss'

// const buttonStyle = { marginRight: '.5rem', width: '200px', height: '64px' }

const inlineStyles = {
  image: {
    height: '32px',
    width: '32px',
    margin: '5px',
    verticalAlign: 'middle'
  },
  span: {
    alignSelf: 'center'
  }
}

export const AccountMenu = ({
  avatarUrl,
  displayName,
  goToAccount,
  onLogoutClick
}) => (
  <div>
    <Menu attached="top">
      <Image src={avatarUrl || defaultUserImage} style={inlineStyles.image} size='mini' circular />
      <span style={inlineStyles.span}>{displayName}</span>
      <Dropdown item icon="content" simple>
        <Dropdown.Menu>
          <Dropdown.Item
            // link={true}
            onClick={goToAccount}>
            Account
          </Dropdown.Item>
          <Dropdown.Item
            // link={true}
            onClick={onLogoutClick}>
            Sign Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
    {/* <Menu attached='top'>
      <Dropdown simple>
            <Image src={avatarUrl || defaultUserImage} />
            <span>
              {displayName || 'User'}
            </span>
            <Icon icon="content" simple />
        <Dropdown.Item name="account" onClick={goToAccount}>
          Account
        </Dropdown.Item>
        <Dropdown.Item name="sign-out" onClick={onLogoutClick}>
          Sign Out
        </Dropdown.Item>
      </Dropdown>
    </Menu> */}
  </div>
)

AccountMenu.propTypes = {
  displayName: PropTypes.string,
  avatarUrl: PropTypes.string,
  goToAccount: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired
}

export default AccountMenu
