import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


export default class SubmitButton extends Component {
    handleClick = () =>{
        this.props.turnOffWelcome();
        let cell = this.props.cell.split(":")[0]
        this.props.getTableData(cell, this.props.disease, this.props.snp, this.props.gene, this.props.search);
    }
    render() {
        return (
            <div>
                <Button variant="contained" onClick={this.handleClick}>Submit</Button>
            </div>
        )
    }
}
