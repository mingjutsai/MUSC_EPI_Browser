import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


export default function SearchByRadioGroup(props) {
    const [value, setValue] = React.useState('gene');

    const handleChange = event => {
        props.handleSearchBy(event);
        setValue(event.target.value);
    };

    return (
        <Box style={{ marginLeft: 20, marginTop: 10, marginRight: 20 }} border={1} borderColor="#ccccb3">
            <FormControl component="fieldset">
                <div style={{ fontSize: 14, fontStyle: "italic", fontWeight:"normal", textTransform: 'none', textDecorationLine:"none" }} component="legend">SearchBy</div>
                <RadioGroup aria-label="SearchBy" name="Searchby" value={value} onChange={handleChange}>
                    <FormControlLabel style={{fontSize:20}} value="gene" control={<Radio />} label={<Typography style={{fontSize:13}}>Gene</Typography>} />
                    <FormControlLabel style={{fontSize:20}} value="snp" control={<Radio />} label={<Typography style={{fontSize:13}}>SNP</Typography>} />
                    <FormControlLabel style={{fontSize:20}} value="range" control={<Radio />} label={<Typography style={{fontSize:13}}>Range</Typography>} />
                </RadioGroup>
            </FormControl>
        </Box>
    );
}