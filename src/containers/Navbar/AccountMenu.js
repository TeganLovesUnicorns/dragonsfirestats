import React from 'react'
import PropTypes from 'prop-types'
// import IconMenu from 'material-ui/IconMenu'
// import MenuItem from 'material-ui/MenuItem'
// import IconButton from 'material-ui/IconButton'
// import DownArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down'
// import Avatar from 'material-ui/Avatar'
import { Dropdown, Menu } from 'semantic-ui-react'
// import defaultUserImage from 'static/User.png'
// import classes from './Navbar.scss'

// const buttonStyle = { marginRight: '.5rem', width: '200px', height: '64px' }

export const AccountMenu = ({
  avatarUrl,
  displayName,
  goToAccount,
  onLogoutClick
}) => (
  <div>
    <Menu attached="top">
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
  // <IconMenu
  //   iconButtonElement={
  //     <IconButton style={buttonStyle} disableTouchRipple>
  //       <div className={classes.avatar}>
  //         <div className="hidden-mobile">
  //           <Avatar src={avatarUrl || defaultUserImage} />
  //         </div>
  //         <div className={classes['avatar-text']}>
  //           <span className={`${classes['avatar-text-name']} hidden-mobile`}>
  //             {displayName || 'User'}
  //           </span>
  //           <DownArrow color="white" />
  //         </div>
  //       </div>
  //     </IconButton>
  //   }
  //   targetOrigin={{ horizontal: 'right', vertical: 'bottom' }}
  //   anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  //   animated={false}
  //   >
  //   <MenuItem primaryText="Account" onTouchTap={goToAccount} />
  //   <MenuItem primaryText="Sign out" onTouchTap={onLogoutClick} />
  // </IconMenu>
)

// AccountMenu.muiName = 'IconMenu'

AccountMenu.propTypes = {
  displayName: PropTypes.string,
  avatarUrl: PropTypes.string,
  goToAccount: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired
}

export default AccountMenu
