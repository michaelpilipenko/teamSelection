import React, {Component} from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";

import Paper from "material-ui/Paper";
import Subheader from "material-ui/Subheader";

const style = {
    paper: {
        float: 'left',
        margin: '15px',
        width: '99%',
        textAlign: 'center',
    },
};

class ProjectInfoBlock extends Component{
    render(){
        return(
            <Paper zDepth={3} style={style.paper}>
                <Subheader style={{fontSize:'22px', textAlign:'left',color:'#2196F3'}}>
                    {this.props.projectName}
                </Subheader>
                <div style={{color:'#616161',fontSize:'16px',textAlign:'left',paddingLeft: '15px'}}>
                    Тип: {this.props.projectType}
                </div>
                <div style={{color:'#616161',fontSize:'16px',textAlign:'left',paddingLeft: '15px'}}>
                    Стадія: {this.props.step}
                </div>
                <div className="descriptionBlock">
                    Опис: {this.props.projectDescript}
                </div>
                <div style={{color:'#7f8c8d',fontSize:'16px',textAlign:'left',paddingLeft: '15px',paddingTop: '10px'}}>
                    Потрібні: {this.props.need}
                </div>
                <div style={{color:'#1E88E5',fontSize:'12px',textAlign:'left', paddingLeft: '15px'}}>
                    Автор: {this.props.authName}
                </div>
                <RaisedButton label="Хочу в команду!" primary style={{bottom: 100}}/>
            </Paper>
        );
    }
}

ProjectInfoBlock.propTypes = {
    projectName: PropTypes.string.isRequired,
    projectDescript: PropTypes.string.isRequired,
    projectType: PropTypes.string.isRequired,
    need: PropTypes.string.isRequired,
    authName: PropTypes.string.isRequired,
    step: PropTypes.string.isRequired,
};

export default ProjectInfoBlock;