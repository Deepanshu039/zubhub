import { fade } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flex: '1 0 auto',
  },
  profileHeaderStyle: {
    paddingTop: '1.5em',
    background: 'rgba(255,204,0,1)',
    background:
      'linear-gradient(to bottom, rgba(255,204,0,1) 0%, rgba(255,229,133,1) 25%, rgba(255,255,255,1) 61%, rgba(255,255,255,1) 100%)',
    [theme.breakpoints.down('511')]: {
      paddingTop: '4em',
    },
  },
  avatarBoxStyle: {
    padding: '0 1em',
    paddingBottom: '2.5em',
    [theme.breakpoints.down('740')]: {
      padding: '1em 1em 0 1em',
      marginBottom: '1em',
    },
  },
  profileShareButtonStyle: {
    borderRadius: '50% !important',
  },
  flexClass: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('740')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  avatarStyle: {
    width: '8rem',
    height: '8rem',
    '& img': {
      width: '8rem',
      backgroundColor: 'white',
      height: '8rem',
      borderRadius: '50%',
    },
    boxShadow: `0 3px 5px 2px rgba(0, 0, 0, .12)`,
  },
  ProfileNameStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'end',
    padding: '0 2em 2em 2em',
  },
  userNameStyle: {
    wordWrap: 'break-word',
    fontWeight: 900,
    fontSize: '2rem',
    [theme.breakpoints.down('740')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  tagsContainerStyle: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '0.1em'
  },
  emailStyle: { marginBottom: '0.5em' },
  moreInfoBoxStyle: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'end',
    flexWrap: 'wrap',
    paddingBottom: '2em',
    [theme.breakpoints.down('525')]: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  },
  moreInfoStyle: {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '5px',
    padding: '1em 1em',
    margin: '0.5em',
    backgroundColor: '#E0F6F8',
    fontWeight: 'bold',
    fontSize: '0.85rem',
    color: '#00B8C4',
    lineHeight: '1',
    width: '5.5rem',
    [theme.breakpoints.down('740')]: {
      margin: '1em',
    },
  },
  moreInfoTitleStyle: {
    fontWeight: 500,
  },
  moreInfoCountStyle: {
    fontWeight: 685,
    fontSize: '1.9rem',
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
  floatRight: { float: 'right' },
  editButton: { 
    display: 'block',
    margin: '0 auto',
    marginTop: '0.5rem'

  },
  followButton: { 
    display: 'block',
    margin: '-3px auto',
    marginTop: '0.75rem'
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
