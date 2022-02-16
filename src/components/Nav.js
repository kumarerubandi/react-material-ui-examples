mport React, { useState } from "react";
import { makeStyles , withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import green from "@material-ui/core/colors/green";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


// react.school/material-ui

const useStyles = makeStyles((theme) => ({
  menuButton: {
    fontsize:'1em',

    color:'green'
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
        
          <Typography variant="h6" className={classes.title}>
            logo
          </Typography>
          <Button color="#234123" aria-controls="first-menu" aria-haspopup="true" 
            onClick={handleClick}>
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


          <Button>
            Main 2
          </Button>
          <Button>
            Main 3
          </Button>
  
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Typography>
       Test...
      </Typography>
    </React.Fragment>
  );
}
