import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ButtonBase, Grid, GridList, GridListTile, Typography } from '@material-ui/core'
import fivela from './assets/fivela.mp3'
import bello from './assets/img/bello.jpeg'
import diahospital from './assets/img/diahospital.jpeg'
import gatin1 from './assets/img/gatin1.jpeg'
import gatin2 from './assets/img/gatin2.jpeg'
import fivela_img from './assets/img/fivela_img.jpeg'
import hellye from './assets/img/hellye.jpeg'
import lekpiranha from './assets/img/lekpiranha.jpeg'
import prefeitacidadepequena from './assets/img/prefeitacidadepequena.jpeg'
import quehumtrocin from './assets/img/quehumtrocin.jpeg'

const useStyles = makeStyles((theme) => ({
  rootGridList: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: '10rem',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  gridList: {
    width: '100%',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem 0 -2rem 0',
    width: '100%',
  },
}))

const images = [
  {
    url: bello,
    title: 'Belloooo',
  },
  {
    url: diahospital,
    title: 'trupica mar num cai',
  },
  {
    url: gatin1,
    title: 'gatin1',
  },
  {
    url: gatin2,
    title: 'gatin2',
  },
  {
    url: fivela_img,
    title: 'fivela',
  },
  {
    url: hellye,
    title: 'hellyey',
  },
  {
    url: lekpiranha,
    title: 'lekpiranha',
  },
  {
    url: prefeitacidadepequena,
    title: 'prefeitacidadepequena',
  },
  {
    url: quehumtrocin,
    title: 'quehumtrocin',
  },
]

const imageAudioMap = {
  'fivela': fivela
}

function ImageTile(props) {
  const classes = useStyles()
  const image = props.image
  return (
    <>
      <ButtonBase
        focusRipple
        key={image.title}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        onClick={() => props.startAudio(image.title)}
        style={{
          width: '100%',
        }}
        >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${image.url})`,
          }}
          />
       <span className={classes.imageBackdrop} />
       <span className={classes.imageButton}>
         <Typography
           component="span"
           variant="subtitle1"
           color="inherit"
           className={classes.imageTitle}
         >
           {image.title}
           <span className={classes.imageMarked} />
         </Typography>
       </span>
     </ButtonBase>
   </>
 )
}

function ImageGridList(props) {
  const classes = useStyles()

  return (
    <div className={classes.rootGridList}>
      <GridList cellHeight={200} className={classes.gridList} cols={3}>
        {images.map((image) => {
          return (
            <GridListTile key={image.title} cols={1}>
              <ImageTile image={image} startAudio={props.startAudio}/>
            </GridListTile>
          )
        })}
      </GridList>
    </div>
  )
}

function Title() {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item className={classes.title} xs={12}>
        <Typography variant="h2">iCorna v1.0</Typography>
      </Grid>
    </Grid>
  )
}
export default function App() {
  const classes = useStyles()
  const [currentAudio, setCurrentAudio] = useState()

  const startAudio = (audioTitle) => {
    let audio = new Audio(imageAudioMap[audioTitle])
    audio.play()
  }

  return (
    <Grid container className={classes.root}>
        <Title />
        <ImageGridList startAudio={startAudio}/>
     </Grid>
  )
}
// <button onClick={start}>Fala corna!</button>
