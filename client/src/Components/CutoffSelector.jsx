import React from 'react';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function CutoffSelector(props) {
    const classes = useStyles();

    const ALPHA = [1, 0.5, 0.05, 0.01]
    const DEFAULT_ALPHA = 1
    const [cutoff, setCutoff] = React.useState({
        HiC_FDR: DEFAULT_ALPHA,
        gwas_p: DEFAULT_ALPHA,
    });


    const handleChange = event => {
        // setCutoff(() => ({
        //     ...cutoff,
        //     [event.currentTarget.id]: event.target.value
        // }))
        props.setCutoff(() => ({
            ...props.cutoff,
            [event.currentTarget.id]: event.target.value
        }))
    };


    return (
        <Box style={{ marginLeft: 20, marginTop: 10, marginRight: 20 }} border={1} borderColor="#ccccb3">
            <FormControl className={classes.formControl}>
                <InputLabel shrink id="HiC_FDR_label" style={{ fontSize: 12 }}>
                    HiC FDR
                </InputLabel>
                <Select
                    labelId="HiC_FDR_label"
                    id="HiC_FDR_label"
                    value={props.cutoff.HiC_FDR}
                    onChange={handleChange}
                    // displayEmpty
                    className={classes.selectEmpty}
                >
                    {ALPHA.map((alpha) => {
                        return (
                            <MenuItem id="HiC_FDR" value={alpha}>{alpha}</MenuItem>
                        )
                    })}
                </Select>
                {/* <FormHelperText>Show rows meets this only</FormHelperText> */}
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel shrink id="gwas_p_label" style={{ fontSize: 12 }}>
                    GWAS P-value
                </InputLabel>
                <Select
                    labelId="gwas_p_label"
                    id="gwas_p_label"
                    value={props.cutoff.gwas_p}
                    onChange={handleChange}
                    // displayEmpty
                    className={classes.selectEmpty}
                >
                    {ALPHA.map((alpha) => {
                        return (
                            <MenuItem id="gwas_p" value={alpha}>{alpha}</MenuItem>
                        )
                    })}
                </Select>
                {/* <FormHelperText>Show rows meets this only</FormHelperText> */}
            </FormControl>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={props.keepSNPinPromoters}
                        onChange={props.SetKeepSNPinPromoters}
                        // name="checkedB"
                        color="primary"
                    />
                }
                label={<Typography variant="subtitle1" color="black">Keep SNPs locate in promoters</Typography>}
            />
        </Box>
    )
}
