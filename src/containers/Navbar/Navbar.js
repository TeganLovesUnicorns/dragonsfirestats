import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
// import AppBar from 'material-ui/AppBar'
import { Menu, Item } from 'semantic-ui-react'
import AccountMenu from './AccountMenu'
import LoginMenu from './LoginMenu'
import { LIST_PATH } from 'constants'
import classes from './Navbar.scss'

export const Navbar = ({
  avatarUrl,
  displayName,
  authExists,
  goToAccount,
  handleLogout
}) => (
  <Menu attached="top">
    <Link to={authExists ? LIST_PATH : '/'} className={classes.brand}>
      DragonsFire
    </Link>
    <Menu.Menu position="right">
      <div className="ui right aligned menu">
        {authExists ? (
          <AccountMenu
            avatarUrl={avatarUrl}
            displayName={displayName}
            onLogoutClick={handleLogout}
            goToAccount={goToAccount}
          />
        ) : (
          <LoginMenu />
        )}
      </div>
    </Menu.Menu>
  </Menu>
  // <AppBar
  //   title={
  //     <Link to={authExists ? LIST_PATH : '/'} className={classes.brand}>
  //       dragonsfirestats
  //     </Link>
  //   }
  //   showMenuIconButton={false}
  // iconElementRight={
  //   authExists ? (
  //     <AccountMenu
  //       avatarUrl={avatarUrl}
  //       displayName={displayName}
  //       onLogoutClick={handleLogout}
  //       goToAccount={goToAccount}
  //     />
  //   ) : (
  //     <LoginMenu />
  //   )
  // }
  //   iconStyleRight={authExists ? { marginTop: 0 } : {}}
  //   className={classes.appBar}
  // />
)

Navbar.propTypes = {
  displayName: PropTypes.string, // from enhancer (flattenProps - profile)
  avatarUrl: PropTypes.string, // from enhancer (flattenProps - profile)
  authExists: PropTypes.bool, // from enhancer (withProps - auth)
  goToAccount: PropTypes.func.isRequired, // from enhancer (withHandlers - router)
  handleLogout: PropTypes.func.isRequired // from enhancer (withHandlers - firebase)
}

export default Navbar
