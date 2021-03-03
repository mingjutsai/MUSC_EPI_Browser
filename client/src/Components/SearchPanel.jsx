import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import SnpPanel from "./SnpPanel";
import GenePanel from "./GenePanel";
import DiseasePanel from './DiseasePanel';
// import { makeStyles } from '@material-ui/core/styles';



export default class SearchPanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // isOpen: this.props.isOpen,
            wf: this.props.wf,
            panel: <div />,
        }
    }

    onHomeClick = () => {
        this.props.handleDrawerClose();
        this.props.turnOnWelcome();
    }

    render() {
        // console.log(this.props.wf);
        if (this.props.wf == "snp") {
            this.state.panel = <SnpPanel turnOffWelcome={this.props.turnOffWelcome} setTracks={this.props.setTracks} setCellType={this.props.setCellType}
                getTableData={this.props.getTableData} cutoff={this.props.cutoff} setCutoff={this.props.setCutoff} SetKeepSNPinPromoters={this.props.SetKeepSNPinPromoters} keepSNPinPromoters={this.props.keepSNPinPromoters}/>
        } else if (this.props.wf == "disease") {
            this.state.panel = <DiseasePanel turnOffWelcome={this.props.turnOffWelcome} setTracks={this.props.setTracks} setCellType={this.props.setCellType}
                getTableData={this.props.getTableData} cutoff={this.props.cutoff} setCutoff={this.props.setCutoff} SetKeepSNPinPromoters={this.props.SetKeepSNPinPromoters} keepSNPinPromoters={this.props.keepSNPinPromoters}/>
        } else if (this.props.wf == "gene") {
            this.state.panel = <GenePanel turnOffWelcome={this.props.turnOffWelcome} setTracks={this.props.setTracks} setCellType={this.props.setCellType}
                getTableData={this.props.getTableData}/>
        }
        // console.log(this.state.wf);
        return (
            <div>
                <List>
                    {/* <ListItem button onClick={this.onHomeClick}> */}
                    <ListItem>

                        <ListItemIcon >
                            <DashboardIcon />
                        </ListItemIcon>
                        <div style={{ fontSize: '1.7em', textAlign: "left", marginLeft: -25 }} >Search panel</div>
                    </ListItem>

                    {this.props.isOpen ? this.state.panel : <div />}

                </List>
            </div>
        )
    }
}


