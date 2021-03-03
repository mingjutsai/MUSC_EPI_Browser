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

export default class SnpDialog extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false,
            age: ""

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
                    style={{ marginTop: 10, marginBottom: 10, fontSize: 14, textTransform: 'none', backgroundColor:"#e3e164" }}
                >By SNP</Button>
                <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Input SNP ID</DialogTitle>
                    <DialogContent>
                        <form style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}>
                            <div spacing={1}>
                                <Grid container spacing={1} alignItems="flex-end">
                                    {/* <Grid item>
                                        <AccountCircle />
                                    </Grid> */}
                                    <Grid item>
                                        <TextField id="input-with-icon-grid" label="“rs” ID" />
                                    </Grid>
                                </Grid>
                            </div>

                            {/* <FormControl style={{
                                margin: 5,
                                minWidth: 120,
                            }}>
                                <InputLabel id="demo-dialog-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-dialog-select-label"
                                    id="demo-dialog-select"
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                    input={<Input />}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl> */}
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