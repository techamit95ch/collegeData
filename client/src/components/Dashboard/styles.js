import { makeStyles, useTheme } from "@material-ui/core/styles";
const drawerWidth = 180;

export default makeStyles((theme) => ({
    container: {
      display: 'flex',
      alignItems: 'center',
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      textAlign: 'center',
      justifyContent:'center',
        backgroundColor:'#fff'
    },
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
        zIndex: theme.zIndex.drawer + 1,
        marginLeft: 20,
        // backgroundColor:'#fff',
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        // width: `calc(100% - ${drawerWidth}px)`,

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