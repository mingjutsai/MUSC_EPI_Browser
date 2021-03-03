import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';



export default class GeneTextField extends Component {
    handleChange = event =>{
        this.props.handleSetGene(event.target.value)
    }
    render() {
        return (
            <div>
                <Box style={{ marginLeft: 20, marginTop: 10, marginRight: 20 }} border={1} borderColor="#ccccb3">
                    {/* <div style={{ fontSize: 14, fontStyle: "italic", textTransform: 'none' }}>Genes</div> */}
                    <TextField
                        placeholder="   Input gene symbol"
                        multiline
                        rows={1}
                        rowsMax={3}
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
