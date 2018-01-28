import React from 'react'
import Theme from 'theme'
// import { Link } from 'react-router'
// import { paths } from 'constants'
import classes from './Home.scss'

export const Home = () => (
  <div
    className={classes.container}
    style={{ color: Theme.palette.primary2Color }}>
    <h1>Home</h1>
    <h2>Welcome to Dragonsfire Stats</h2>
    <h3>The best app in the world for playing Dungeons &amp; Dragons.</h3>
    <p>
      With Dragonsfire you will be able to eliminate the need for your party
      members to lug their Player's Handbook and their Character Sheets around.
    </p>
    <p>
      With Dragonsfire you will be able to keep track of your Characters and
      Parties in real time. No longer will you have to rush through a battle
      when everyone is tired. This is because our database saves everything. For
      example, if your elf gets poisoned, the database will save that state so
      that if the session gets cut short you will know the next time you play.
      The app will also have explainations pulled straight from the Player's
      Handbook for everything.
    </p>
    <h4>Add Dragonsfire to your party's tools and become legendary.</h4>
  </div>
)

export default Home
