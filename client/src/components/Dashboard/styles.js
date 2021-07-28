import { makeStyles, useTheme } from "@material-ui/core/styles";
const drawerWidth = 180;

export default makeStyles((theme) => ({
   
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        justifyContent:'center',
      },
      page: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1),
        
        backgroundColor:'#fff',
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        

      },
      pageShift: {
        display: 'flex',
        alignItems: 'center',        
        padding: theme.spacing(1),
        // backgroundColor:'#fff',
        marginLeft: drawerWidth,
        // width: `calc(100% - ${drawerWidth-60}px)`,
        width: `calc(100% - ${drawerWidth-20}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    
  }));