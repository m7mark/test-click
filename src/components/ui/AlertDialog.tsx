import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

interface AlertProps {
  isError: boolean
}

export const AlertDialog = ({ isError }: AlertProps) => {
  const handleClose = () => {
    window.location.reload()
  }
  return (
    <div>
      <Dialog
        open={isError}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Server Error'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Alert variant="outlined" severity="error">
              Try to reload page!
            </Alert>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error" autoFocus>
            Reload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
