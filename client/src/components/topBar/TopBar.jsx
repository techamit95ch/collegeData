import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import clsx from "clsx";
// Auto Compete And Search purpose
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom"; // version 5.2.0
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
const drawerWidth = 240;
const filter = createFilterOptions();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#fff",
    dispaly: "flex",
    justifyContent: "space-between",
    // position: 'sticky',
    color: "aliceblue",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    dispaly: "flex",
    backgroundColor: "#24292e",
    color: "aliceblue",
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  title: {
    flexGrow: 1,
    display: "none",
    color:'#3170ec',
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
 
    
}));

export default function TopBar({ open, setOpen, setSearchText, searchText }) {
  const history = useHistory();

  const posts = useSelector((state) => state.posts);
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: posts,
    getOptionLabel: (option) => option.title,
  });
  const classes = useStyles();
  //   const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(null);
  const [toggleOpen, setToggleOpen] = React.useState(false);

  const handleClose = () => {
    setDialogValue({
      title: "",
    });

    setToggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    title: "",
  });

  
  return (
    <div className={classes.root}>
      <AppBar
        className={
          classes.appBar
        }
      >
        <Toolbar>
          

         
            <Typography className={classes.title} variant="h6" noWrap>
              College Data
            </Typography>
         
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

// export default topBar
