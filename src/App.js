import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    margin: '1rem'
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
}))

const images = [
  {
    url: bello,
    title: 'Belloooo',
    width: '20%',
  },
  {
    url: diahospital,
    title: 'trupica mar num cai',
    width: '20%',
  },
  {
    url: gatin1,
    title: 'gatin1',
    width: '20%',
  },
  {
    url: gatin2,
    title: 'gatin2',
    width: '20%',
  },
  {
    url: fivela_img,
    title: 'fivela',
    width: '20%',
  },
  {
    url: hellye,
    title: 'hellyey',
    width: '20%',
  },
  {
    url: lekpiranha,
    title: 'lekpiranha',
    width: '20%',
  },
  {
    url: prefeitacidadepequena,
    title: 'prefeitacidadepequena',
    width: '20%',
  },
  {
    url: quehumtrocin,
    title: 'quehumtrocin',
    width: '20%',
  },
]

const imageAudioMap = {
  'fivela': fivela
}

export default function App() {
  const classes = useStyles()
  const [currentAudio, setCurrentAudio] = useState()

  const selectAudio = (imageTitle) => {
    let res = new Promise()
    switch(imageTitle) {
      case 'fivela': return fivela;
      default: return fivela;
    }
  }

  const startAudio = (audioTitle) => {
    let audio = new Audio(imageAudioMap[audioTitle])
    audio.play()
  }

  return (
    <div className={classes.root}>
    {images.map((image) => (
       <ButtonBase
         focusRipple
         key={image.title}
         className={classes.image}
         focusVisibleClassName={classes.focusVisible}
         onClick={() => startAudio(image.title)}
         style={{
           width: image.width,
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
     ))}
    </div>
  )
}
// <button onClick={start}>Fala corna!</button>
