import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';



export default class RangeTextField extends Component {
    render() {
        return (
            <div>
                <Box style={{ marginLeft: 20, marginTop: 10, marginRight: 20 }} border={1} borderColor="#ccccb3">
                    <div style={{ fontSize: 14, fontStyle: "italic", textTransform: 'none' }}>Genes</div>
                    <TextField
                        placeholder="e.g.chrX:15,560,138-15,602,945"
                        multiline
                        rows={1}
                        rowsMax={3}
                        style={{
                            marginTop: 10,
                        }}
                        InputProps={{
                            style: {
                                fontSize: 13,
                            },
                        }}
                    />
                    <div style={{ marginTop: 8 }}></div>
                </Box>

            </div>
        )
    }
}
