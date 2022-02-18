import React, { useState } from "react";
import { makeStyles , withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Logo from '../assets/logo.png'
import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';


// react.school/material-ui

const useStyles = makeStyles((theme) => ({
  menuItem: {
    fontSize:'0.8em',
    margin:'0 1%',
    color:'#002b49',
    textTransform: 'capitalize',
    fontWeight:'bold'
  },
  logo: { 
    width:100
  },
  title: {
    
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: green[500]
  },
  customHeight: {
    minHeight: 200
  },
  iconTray:{
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',

  },

  offset: theme.mixins.toolbar
}));


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


export default function Nav() {
    const classes = useStyles();
    const [example, setExample] = useState("primary");
    const isCustomColor = example === "customColor";
    const isCustomHeight = example === "customHeight";
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <React.Fragment>
      <AppBar
        color={'transparent'}
        className={`${isCustomColor && classes.customColor} ${
          isCustomHeight && classes.customHeight
        }`}
      >
      <Toolbar>
          <Box
              component={'img'}
              alt="Logo"
              src={Logo}
              className={classes.logo}
          />
          <Button className={classes.menuItem}  
          aria-controls="first-menu" 
          aria-haspopup="true" 
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Main 1
          </Button>
           <StyledMenu
        id="first-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
            <StyledMenuItem>
              menu1
            </StyledMenuItem>
            <StyledMenuItem>
             menu2
            </StyledMenuItem>
            <StyledMenuItem>
              menu3
            </StyledMenuItem>
          </StyledMenu>


          <Button className={classes.menuItem}>
            Main 2
          </Button>
          <Button className={classes.menuItem}>
           Main 3
          </Button>
        
          
       
          <div className={classes.iconTray}>
            <IconButton aria-label="delete">
              <SearchIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <AccountCircleOutlinedIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
   
    </React.Fragment>
  );
}
