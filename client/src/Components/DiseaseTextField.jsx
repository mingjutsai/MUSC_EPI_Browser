import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

// code by wzhou on 020921

export default class DiseaseTextField extends Component {

    handleChange = event =>{
        this.props.handleSetDisease(event.target.value)
    }
    render() {
        return (
            <div>
                <Box style={{ marginLeft: 20, marginTop: 10, marginRight: 20 }} border={1} borderColor="#ccccb3">
                    {/* <div style={{ fontSize: 14, fontStyle: "italic", textTransform: 'none' }}>SNP</div> */}
                    <TextField
                        placeholder="   Input disease"
                        rows={1}
                        rowsMax={1}
                        style={{
                            marginTop: 10,
                        }}
                        onChange={this.handleChange}
                        InputProps={{
                            style: {
                                fontSize: 12,
                                marginLeft: 10,
                                marginRight: 10
                            },
                        }}
                    />
                    <div style={{ marginTop: 8 }}></div>
                </Box>
            </div>
        )
    }
}
