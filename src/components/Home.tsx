import { Alert, Backdrop, Button, CircularProgress } from '@mui/material'
import { useCount } from '../hooks/useCount'
import { declOfNum } from '../utils/words'
import styles from './Home.module.css'
import { AlertDialog } from './ui/AlertDialog'

export const Home = () => {
  const { serverCount, click, handleClick, isLoading, isError } = useCount()
  console.log(isLoading, isError)
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Button
          color="warning"
          sx={{ fontWeight: 600 }}
          variant="contained"
          onClick={handleClick}
          disabled={isLoading}
        >
          КЛИКНУТЬ
        </Button>
        <Alert severity="info">{`Кликнули ${click} ${declOfNum(click)}`}</Alert>
        <Alert severity="warning">{`На сервере ${serverCount} ${declOfNum(
          serverCount
        )}`}</Alert>
        <>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <AlertDialog isError={isError} />
        </>
      </div>
    </div>
  )
}
