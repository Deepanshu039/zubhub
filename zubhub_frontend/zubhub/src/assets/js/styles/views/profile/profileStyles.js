import { fade } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flex: '1 0 auto',
  },
  classFlex: {
    display: 'flex',
    [theme.breakpoints.down('657')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  profileHeaderStyle: {
    paddingTop: '1.5em',
    paddingBottom: '1.5em',
    background: 'rgba(255,204,0,1)',
    background:
    'linear-gradient(to bottom, rgba(255,204,0,1) 0%, rgba(255,229,133,1) 25%, rgba(255,255,255,1) 61%, rgba(255,255,255,1) 100%)',
  },
  avatarBoxStyle: {
    minWidth: '35%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileShareButtonStyle: {
    borderRadius: '50% !important',
  },
  avatarStyle: {
    width: '80%',
    height: '80%',
    paddingLeft: '1em',
    paddingRight: '1em',
    '& img': {
      width: '8em',
      backgroundColor: 'white',
      height: '8em',
      borderRadius: '50%',
      boxShadow: `0 3px 5px 2px rgba(0, 0, 0, .12)`,
    },
  },
  ProfileDetailStyle: {
    minWidth: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    marginRight: '1.5em',
    [theme.breakpoints.down('657')]: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '1.5em'
    },
  },
  userNameStyle: {
    fontWeight: 900,
    fontSize: '2rem',
    position: 'relative',
    overflowWrap: 'anywhere',
    
    [theme.breakpoints.down('750')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  tagsContainerStyle: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '0.5em',
    paddingBottom: '0.5em',
    [theme.breakpoints.down('657')]: {
      paddingTop: '0',
      paddingBottom: '0',
    },
  },
  removeTagMargin: {
    marginLeft: '0 !important',
  },
  centerTag: {
  alignItems: 'center',
  },
  emailStyle: { 
    overflowWrap: 'anywhere',
  },
  dividerStyle: {
  },
  moreInfoBoxStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'end',
    flexWrap: 'wrap',
    [theme.breakpoints.down('657')]: {
      marginTop: '1.3em',
    },
  },
  moreInfoStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  moreInfoStyle1: {
    fontWeight: '500',
    fontSize: '0.9rem',
    color: '#00B8C4',
    paddingLeft: '5px',
    paddingRight: '5px',
  },
  moreInfoStyle2: {
    fontWeight: '550',
    fontSize: '3.5em',
    color: '#00B8C4',
  },
  profileLowerStyle: {
    margin: '1em',
    padding: '1em',
  },
  titleStyle: {
    fontWeight: 900,
    fontSize: '1.5rem',
  },
  cardStyle: {
    border: 0,
    borderRadius: 15,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .12)',
    color: 'white',
    padding: '0 30px',
  },
  customLabelStyle: {
    '&.MuiFormLabel-root.Mui-focused': {
      color: '#00B8C4',
    },
  },

  projectGridStyle: {
    marginBottom: '2em',
  },
  customInputStyle: {
    borderRadius: 15,
    '&.MuiOutlinedInput-notchedOutline': {
      border: '2px solid #00B8C4',
      boxShadow: `${fade('#00B8C4', 0)} 0 0 0 0.2rem`,
    },
    '&.MuiOutlinedInput-root': {
      '&:hover fieldset': {
        border: '2px solid #00B8C4',
        boxShadow: `${fade('#00B8C4', 0)} 0 0 0 0.2rem`,
      },
      '&.Mui-focused fieldset': {
        border: '2px solid #00B8C4',
        boxShadow: `${fade('#00B8C4', 0)} 0 0 0 0.2rem`,
      },
    },
  },
  secondaryLink: {
    color: '#00B8C4',
    '&:hover': {
      color: '#03848C',
    },
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDecorationNone: {
    textDecoration: 'none',
  },
  floatRight: 
  { 
    float: 'right',
  },
  secondaryButtonMargin: 
  { 
    marginTop: '1em',
  },
  verticalOption: 
  { 
    float: 'right' ,
    [theme.breakpoints.down('657')]: {
      float: 'none',
    },
  },
  displayNone: { display: 'none' },
  largeLabel: {
    fontSize: '1.3rem',
  },
  errorBox: {
    width: '100%',
    padding: '1em',
    borderRadius: 6,
    borderWidth: '1px',
    borderColor: '#a94442',
    backgroundColor: '#ffcdd2',
  },
  error: {
    color: '#a94442',
  },
});

export default styles;
