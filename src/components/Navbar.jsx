import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Switch } from '@mui/material'
import { Search } from '@mui/icons-material'
// import withStyles from '@mui/styles'

// import styles from '../styles/NavbarStyles'

class Navbar extends Component {
  render() {
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span>🍁</span>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              app title
            </Typography>
            <Switch />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Navbar
