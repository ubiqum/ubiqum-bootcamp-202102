import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import Circle from './images/circled-right-2.png'
import { MusicNoteSharp, AirplanemodeActiveSharp, RestaurantSharp, TrainSharp } from '@material-ui/icons';
import Home from './images/homeIcon.png'

const useStyles = makeStyles({
  applogo: {
    fontFamily: '"Helvetica Neue"',
    fontDisplay: 'swap',
    margin: 'auto',
    color: 'white',
    fontWeight: 10000,
    fontSize: 70,
    padding: 20

  },
  logo: {
    width: 80
  },
  landing: {
    minWidth: 800
  },
  bigbox: {
    width: 800,
    margin: 'auto'
  },
  box: {
    width: 650,
    margin: 'auto'
  },
  footer: {
    margin: 'auto'
  }

});

function Landing() {

  const classes = useStyles();

  return (<div className={classes.landing}>
    <Box bgcolor="success.main" borderRadius={40} className={classes.bigbox}>
      <Box bgcolor="error.main" borderRadius={40} className={classes.box}>
        <div>
          <h1 className={classes.applogo}>MYtinerary</h1>
          <MusicNoteSharp /> <AirplanemodeActiveSharp /> <RestaurantSharp /> <TrainSharp />
        </div>
        <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
        <h2>Start browsing</h2>
        <div style={{ width: '100%' }}>
          <NavLink to='/cities'><Button><img className={classes.logo} src={Circle} alt="Page Cities" /></Button></NavLink>
        </div>
        <div>
          <p>Want to build your own MYtinerary?</p>
          <Button>Log in</Button>
          <Button>Create Account</Button>
        </div>
      </Box>
      <footer className={classes.footer}>
        <Button><img className={classes.logo} src={Home} alt="return home" /> </Button>
      </footer>
    </Box>
  </div>)
}

export default Landing