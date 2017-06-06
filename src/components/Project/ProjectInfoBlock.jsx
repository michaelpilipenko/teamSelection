import React, {Component} from "react";

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
                <Subheader></Subheader>

            </Paper>
        );
    }
}

export default ProjectInfoBlock;