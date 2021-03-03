import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function EqtlWindow(props) {
    // const [open, setOpen] = React.useState(false);

    // const handleClose = () => {
    //     props.setEqtlWindowOpen(false);
    // };
    const preventDefault = (event) => event.preventDefault();

    return (
        <Dialog maxWidth="xl" fullWidth={true} onClose={() => { props.setEqtlWindowOpen(false) }} aria-labelledby="eqtl-dialog" open={props.eqtlWindowOpen}>
            <DialogTitle id="customized-dialog-title" onClose={() => { props.setEqtlWindowOpen(false) }} style={{ fontSize: 25 }}>
                <Typography style={{ fontSize: 24 }}>
                    Find more information on GTEx
                </Typography>
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom style={{ fontSize: 20 }}>
                    <div>1. Open <Link href="https://www.gtexportal.org/home/testyourown"
                        // onClick={preventDefault}
                        target="_blank"
                    >
                        GTEx eQTL Calculator
                         </Link>
                         </div>
                </Typography>
                <Typography gutterBottom style={{ fontSize: 20 }}>
                    <div>2. Copy and paste the below content into calculator's box</div>
                </Typography>

                <Typography gutterBottom style={{ fontSize: 18, whiteSpace:"pre-line", backgroundColor:"#cccbc8" }}>
                    {props.eqtlInfo}
                </Typography>
            </DialogContent>
            {/* <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Copy text
                </Button>
            </DialogActions> */}
        </Dialog>
    );
}