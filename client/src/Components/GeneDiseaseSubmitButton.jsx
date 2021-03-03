import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


export default class GeneDiseaseSubmitButton extends Component {
    render() {
        return (
            <div>
                <Button variant="contained" onClick={this.props.turnOffWelcome}>Submit</Button>
            </div>
        )
    }
}
