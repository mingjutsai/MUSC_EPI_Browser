import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';

// const useStyles = makeStyles(theme => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },
// }));

export default class LocusDialog extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false,

        }
    }
    setOpen = (b) => {
        this.setState({ open: b })
    }

    setAge = (n) => {
        this.setState({ age: n })
    }

    handleChange = event => {
        this.setAge(Number(event.target.value) || '');
    };

    handleClickOpen = () => {
        this.setOpen(true);
    };

    handleClose = () => {
        this.setOpen(false);
    };
    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}
                    style={{ marginTop: 10, marginBottom: 10, fontSize: 14, textTransform: 'none', backgroundColor:"#d9534a" }}
                    >By Locus</Button>
                <Dialog maxWidth="md" fullWidth={true} disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Input coordinate range</DialogTitle>
                    <DialogContent>
                        <form className="k-form" 
                            style={{
                            display: 900,
                            flexWrap: 'wrap',
                        }}
                        >
                            <div spacing={1}>
                                <Grid container spacing={1} alignItems="flex-end">
                                    {/* <Grid item>
                                        <AccountCircle />
                                    </Grid> */}
                                
                                        <TextField id="input-with-icon-grid" size="medium" required="true" multiline="true" label="e.g.chrX:15,560,138-15,602,945" fullWidth="true"/>
                              
                                </Grid>
                            </div>

                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
              </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Submit
              </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

}
